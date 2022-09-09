import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import "./Warehouses.scss"
import { useParams, useNavigate } from 'react-router-dom'
const Warehouses = () => {

  const [items, setItems] = useState(null)
  const {warehouseid} = useParams()
  const navigate = useNavigate()
  
  

  useEffect (()=>{
    axios.get("http://localhost:8081/warehouse")
      .then((response)=>{
        setItems(response.data)
      })
  },[])

 

  const handleAddClick = () => {
    navigate("/warehouses/add")
  }

  const handleCancelClick = () => {
    navigate("/warehouses")
  }

  const handleDeleteClick = (warehouseid) => {
    axios.delete(`http://localhost:8081/warehouse/${warehouseid}`)
      .then ((response)=>{  
        navigate("/warehouses")
        return axios.get("http://localhost:8081/warehouse")
      })
      .then ((response)=>{
        setItems(response.data)
      })
  
  }

  if (!items) {
    return <h1>Loading . . .</h1>
  }
  
  let overlay = <></>

  if (warehouseid !== undefined) {
    const item = items.find((item)=> item.id === warehouseid)
    overlay =
      <> 
        <div className='overlay'></div>
          <div className='overlay__text'>
            <img className="overlay__x" src={""} alt="X"></img>
            <h1 className='overlay__header'>Delete {item.name} Warehouse?</h1>
            <p className='overlay__para'>Please confirm that you'd like to delete {item.name} from the list of warehouses. You won't be able to undo this action</p>
            <div className='overlay__buttons'>
              <button className='cancel' onClick={handleCancelClick}>Cancel</button>
              <button  className='delete' onClick={()=>{handleDeleteClick(warehouseid)}}>Delete</button>
            </div>
          </div>
        <div className='overlay__box'></div>
      </>
  }

  return (
    <>
      {overlay}
      <main className="items">
        <div className="items__header">
          <h1>Warehouses</h1>
          <div className="item__subhead">
            <input className="item__search"/>
            <button onClick={handleAddClick}>Add New Warehouse</button>
          </div>
        </div>
        <div className="item-card">
        {items.map((item)=>{
          return (
            <ItemCard
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
    </>
  )
    
  
}

export default Warehouses