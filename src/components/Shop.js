import React from 'react';
import {useState, useEffect} from 'react';

// add function to fetch data from api (async)
// wrap it in the useEffect
// save the data in a state
// render it one prop in the shop page

function Shop() {

  const [responseData, setREsponseData] = useState([])

  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/br')

    data ? console.log('raw data:', data) : console.log('..loading')
    const response = await data.json()
    console.log(' response json:', response)
    setREsponseData(response.data)
  }
  let i = 0
  return (
    <div>
        <h1>Shop page</h1>
        {Object.keys(responseData).map((field) => (
          <h2 key={++i}> {responseData[field].name} and {responseData[field].id} and 
          {Object.keys(responseData[field].images).map((item, i=0) => (
            <h3>{++i} - {item}</h3>
          ))}</h2>
        ))}
    </div>
  );  
}

export default Shop;