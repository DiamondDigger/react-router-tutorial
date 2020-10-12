import React from 'react';
import {useState, useEffect} from 'react';

// add function to fetch data from api (async)
// wrap it in the useEffect
// save the data in a state
// render it one prop in the shop page

function Shop() {

  const [responseData, setResponseData] = useState([])

  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/br')

    data ? console.log('raw data:', data) : console.log('..loading')
    const response = await data.json()
    console.log(' response json:', response)
    setResponseData(response.data)
  }

  let imgURL = []
  Array.of(responseData).forEach(item => item.map(deepItem => imgURL.push(deepItem.images.icon)))
  console.log(imgURL)
  let i = 0
  return (
    <div> 
        <h1>Shop page</h1>
        {imgURL.forEach((item) => console.log(++i, item))}
        {/* {responseData.map((item, itemId) => (
          <h2 key={itemId}>{item.name} - {item.id} 
          <br/> {item.description}
          </h2>
        ))} */}
        {imgURL.map(item => (<img src={item} alt='smthg should be here'/>))}
    </div>
  );  
}

export default Shop;