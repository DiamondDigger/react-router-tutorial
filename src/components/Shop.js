import React from 'react';
import {useState, useEffect} from 'react';
import './styles/cardShopStyle.css'
import '../'

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
  let mapOfUrls = new Map()
  Array.of(responseData).forEach(item => item.map(deepItem => imgURL.push(deepItem.id)))
  Array.of(responseData).forEach(item => item.map(deepItem => mapOfUrls.set(deepItem.id, deepItem.images.icon)))

  console.log('imgURL:', imgURL)
  console.log('mapOfUrls:', mapOfUrls)
  let i = 0
  return (
    <div> 
        <h1>Shop page</h1>
        {imgURL.forEach((item) => console.log(++i, item))}

        {imgURL.map(item => (
          <div className='main'>
            <div className="card">
              {/* <img src="img_avatar2.png" alt="Avatar" style="width:100%" /> */}
              <img src={mapOfUrls.get(item)} width='100%' alt={'./'} />
              <div className="container">
                <h4><b>{item}</b></h4> 
                <p>Interior Designer</p> 
              </div>
            </div>
          </div>
        ))}
    </div>
  );  
}

export default Shop;