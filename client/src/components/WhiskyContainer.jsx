import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WhiskyContainer = () => {

  // constructing our state (named "whiskies") and initializing our state to an empty array initially
  const [whiskies, setWhiskies] = useState([]);
  // on page load, make a fetch call to /api and load that into our state?

  console.log('initial state:', whiskies)

  useEffect(() => {
    async function fetchWhiskies() {
      const response = await fetch('/api')
     
      const data = await response.json();
     
      console.log(data)
      const whiskeyArray = data.whiskeys;
      console.log(whiskeyArray)
      
      setWhiskies(whiskeyArray);
      
    }
    fetchWhiskies();
  }, [])
  
  console.log('after fetch call', whiskies);


  const handleClick = async (whisky) => {
    console.log('this is the whisky',whisky)
    console.log('button');
    try {
      const response = await fetch('/whiskeys/add', {
        method: 'POST',
        body: JSON.stringify({
          whisky
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result));
    } catch (err) {
      console.log('error in Add To List button');
     }
  };
  
  


  const whiskyDiv = [];
  for (let i = 0; i < whiskies.length; i += 1) {
    const whisky = whiskies[i];
    whiskyDiv.push(
      <div key={i}>
        <hr/>
        <h3>{whisky.title}</h3>
        <h4><strong>Region</strong>: {whisky.region}</h4>
        <img src={whisky.list_img_url}/><br></br>
        <button onClick={()=>handleClick(whisky)}>Add To Tasting List</button>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Whiskies</h2>
      <Link to="/tastinglist">Tasting List</Link>
      <p>(Scroll down to see more)</p>
      <div>{whiskyDiv}</div>
      <br/>
    </div>
  )
}

export default WhiskyContainer;






// const checBoxfunc = async (e) => {
//     let updateList = item
//     let removeList = []

    
//     const addX = (e) => {updateList.push(e);
//     console.log('AAEEEEAEEAEA',updateList)}  
//     const removeX = (e) => {
//         for (const each of item){
//             if (each !== e) removeList.push(each)
//         }
//         console.log('the part thats not working')
//         updateList = removeList
//     } 

//     item.includes(e) ? removeX(e) : addX(e)
//     console.log(updateList)
//     await selectItem(item => updateList)
   
//     console.log('item = ',item)
//  }