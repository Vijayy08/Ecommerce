import React from 'react'
import '../Popular/Popular.css'
import data_product from '../assets/data'/*importing all the data for items from data.js file*/
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in Women</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
                /* ^^This is where you pass the props that are being used in Item*/ 
            })}
        </div>
    </div>
  )
}

export default Popular