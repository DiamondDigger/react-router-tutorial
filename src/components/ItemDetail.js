import React from 'react'
import {useState, useEffect} from 'react'

function ItemDetail({match}) {

    const [itemInfo, setItemInfo] = useState({
        images: {
            icon: ''
        },
        added: ''
    })

    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () => {
        const response = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`)
        const details = await response.json()
        setItemInfo(details.data)
    }

    console.log('render of ItemDetail')
    return (
        <div>
            <h1>Item</h1>
            <h2>{itemInfo.name}</h2>
            <img src={itemInfo.images.icon} alt='smthg should be here' />
            <h3>{itemInfo.description} </h3>
            <p>Date of the adding: </p>
            <h3>{itemInfo.added.slice(0,10)} </h3>
        </div>
    )
}

export default ItemDetail;