import React, { useState, useEffect } from "react";

const WhiskyContainer = () => {

  // constructing our state (named "whiskies") and initializing our state to an empty array initially
  const [whiskies, setWhiskies] = useState([]);
  // on page load, make a fetch call to /api and load that into our state?

  console.log('initial state:', whiskies)

  useEffect(() => {
    async function fetchWhiskies() {
      const response = await fetch('/api')
      // const newResponse = await fetch('https://evening-citadel-85778.herokuapp.com:443/whiskey/')
      // const newNewResponse = await fetch ('https://evening-citadel-85778.herokuapp.com/whiskey/?page=2')
      // const newNewData = await newNewResponse.json();
      // console.log(newNewData)
      // console.log(newResponse)
      const data = await response.json();
      // const newData = await newResponse.json();
      console.log(data)
      const whiskeyArray = data.whiskeys;
      console.log(whiskeyArray)
      // console.log(newData);
      setWhiskies(whiskeyArray);
      // console.log(whiskeys) // changes our whiskies state from [] to data.whiskies (data.whiskies is an arr)
    }
    fetchWhiskies();
  }, [])
  
  console.log('after fetch call', whiskies);

  const whiskyDiv = [];
  for (let i = 0; i < whiskies.length; i += 1) {
    const whisky = whiskies[i];
    whiskyDiv.push(
      <div>
        <hr/>
        <h3>{whisky.title}</h3>
        <h4><strong>Region</strong>: {whisky.region}</h4>
        <img src={whisky.list_img_url}/><br></br>
        <button>Add To Tasting List</button>
      </div>
    );
  }
  

  return (
    <div>
      <h2>Whiskies</h2>
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