import React from 'react';
import {useState, useEffect} from 'react';
import './styles/cardShopStyle.css'
import {Link} from 'react-router-dom'

function Shop() {

  const [responseData, setResponseData] = useState([])

  useEffect(()=> {
    responseData.length > 0 
    ? console.log('data was uploaded')
    : fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/br')

    data ? console.log('raw data:', data) : console.log('..loading')
    const response = await data.json()
    console.log(' response json:', response)
    setResponseData(response.data)
  }

  let arrOfId = []
  let mapOfNames = new Map()
  let mapOfUrls = new Map()

  Array.of(responseData).forEach(item => item.map(deepItem => arrOfId.push(deepItem.id)))
  Array.of(responseData).forEach(item => item.map(deepItem => mapOfNames.set(deepItem.id, deepItem.name)))
  Array.of(responseData).forEach(item => item.map(deepItem => mapOfUrls.set(deepItem.id, deepItem.images.icon)))

  console.log('arrOfId:', arrOfId)
  console.log('mapOfName:', mapOfNames)
  console.log('mapOfUrls:', mapOfUrls)

  console.log(`render of Shop`)
  return (
    <div> 
        <h1>Shop page</h1>

        {arrOfId.map(item => (
          <div className='main'>
            <div className="card">
              <img src={mapOfUrls.get(item)} width='100%' alt={'./'} />
              <div className="container">
                <h4><b>{mapOfNames.get(item)}</b></h4>
                <p>
                <Link to={`/shop/${item}`}>More descripion</Link>
                </p> 
              </div>
            </div>
          </div>
        ))}
    </div>
  );  
}

export default Shop;