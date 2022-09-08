import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import "./Warehouses.scss"

const Warehouses = () => {

  const [items, setItems] = useState(null)

  useEffect (()=>{
    axios.get("http://localhost:8081/warehouse")
      .then((response)=>{
        setItems(response.data)
      })
  },[])

  if (!items) {
    return <h1>Loading . . .</h1>
  }

  const handleCardClick = () => {
    alert("hello")
  }
  
  return (
    <main className="items">
      <div className="items__header">
        <h1>Warehouses</h1>
        <div className="item__subhead">
          <input className="item__search"/>
          <button>Add New Warehouse</button>
        </div>
      </div>
      <div className="item-card">
      {items.map((item)=>{
        return (
          <ItemCard
            onClick={handleCardClick}
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            city={item.city}
            country={item.country}
            contactName={item.contact.name}
            contactEmail={item.contact.email}
            contactPhone={item.contact.phone}
          />
        )
      })}
      </div>
    </main>
  )
}

export default Warehouses