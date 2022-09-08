import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const WareHouseDetails = () => {
  const {warehouseId} = useParams()
  const [warehouse, setWarehouse] = useState("")
  
  useEffect (()=>{
    axios.get(`http://localhost:8081/warehouse/${warehouseId}`)
      .then((response)=>{
        setWarehouse(response.data)
      })
  },[warehouseId])


  return (
    <div>{warehouse.name}</div>
  )
}

export default WareHouseDetails