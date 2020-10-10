import React from 'react';
import {useState, useEffect} from 'react';

// add function to fetch data from api (async)
// wrap it in the useEffect
// save the data in a state
// render it one prop in the shop page

function Shop() {

  const [covidLatestInfo, setCovidLatestInfo] = useState([])

  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch('https://api.covid19api.com/total/country/germany/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
    data ? console.log('raw data:', data) : console.log('..loading')
    const covidInfo = await data.json()
    console.log('covid info status:', covidInfo)
    setCovidLatestInfo(covidInfo)
  }
  let i = 0
  return (
    <div>
        <h1>Shop page</h1>
        {covidLatestInfo.map(row => (
          <h2 key={++i}>At {row.Date.slice(0,10)} there are {row.Cases} confirmed cases <br/> in {row.Country}
        </h2>)
        )}
    </div>
  );
}

export default Shop;