import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TastingList = () => {

const handleClick = async (id) => {
console.log(`this is the whiskey id ${id}`)
}

const [whiskies, setWhiskies] = useState([]);

useEffect(() => {
    async function fetchWhiskies() {
        const response = await fetch ('/whiskeys/whiskeys')
        const data = await response.json();
        console.log(data);
        // const whiskeyArray = data.whiskeys;
        setWhiskies(data);
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
        <button method ='DELETE' id="delete" onClick={() => handleClick(whiskey.id)}> Delete Whiskey </button>
      </div>
    );
  }

    return( 
<>
    <h2>Your Personal TastingList</h2>
    <Link to="/dashboard">Whiskies</Link>
    <div>{whiskyDiv}</div>
    <br></br>
</>    
    )
}

export default TastingList;