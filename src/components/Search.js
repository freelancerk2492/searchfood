import React, { useState } from 'react'
import {Data} from './Data'

const Search = () => {

    const [store, setStore] =useState(Data)
    const [data, setData] =useState('')
    console.log(store)

    const getData =(e)=>{
        console.log(e.target.value);
        setData(e.target.value)
    }
   const filterOut = store.filter((currentValue)=>{
        return currentValue.name.toLowerCase().includes(data) || currentValue.brand.toLowerCase().includes(data);
    })
  return (
    <>
        <div className='searchParent'>
            <input type='text' placeholder='Search here...' onChange={getData}/>
        </div>
        <ul style={{display:'flex'}}>
            <li>Name</li>
            <li>Brand</li>
            <li>Image</li>
        </ul>
        <ul>
            {filterOut.map((item)=>{
                return( 
                    <li key={item.name}>
                        <div>{item.name}</div>
                        <div>{item.brand}</div>
                        <div><img src={item.img} alt='' /></div>
                    
                    </li>
                   
                )          
            })}
        </ul>
    </>
  )
}

export default Search
