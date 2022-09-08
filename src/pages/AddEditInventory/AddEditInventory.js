import React from 'react'
import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./AddEditInventory.scss"
import { fetchInventory, fetchWarehouses } from '../../utils/api';

const AddEditInventory = () => {

  const [inventoryData, setInventoryData] = useState(null)
  const [categoryValue, setCategoryValue] = useState("default");
  const [warehousesData, setWarehousesData] = useState(null)
  const [warehousesValue, setWarehousesValue] = useState("default");
 
  // Handle category change on Select
  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.categoryValue);
  };

   // Handle warehouse change on Select
   const handleWarehouseChange = (e) => {
    setWarehousesValue(e.target.warehousesValue);
  };

  useEffect(() => {
    fetchInventory()
      .then((response) => {
        setInventoryData(response.data);
        return fetchWarehouses()
      })
      .then((response) => {
        setWarehousesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  if (!inventoryData || !warehousesData) {
    return <p>Loading</p>;
  }

  // Get all inventory items and their categories, then remove duplicates to get a up to date category list
  const categoryArray = inventoryData.map((item) => {
    return item.category;
  })
  let filteredCategoryArray = [...new Set(categoryArray)];

  // Get all warehouses and their names, then remove duplicates to get a up to date warehouses list
  const warehousesArray = warehousesData.map((warehouse) => {
    return warehouse.name;
  })
  let filteredWarehousesArray = [...new Set(warehousesArray)];
  

  return (
    <div className="add-edit-inventory">
      <div className="add-edit-inventory-top">
        <img className="add-edit-inventory__back-button" src={ArrowBack} alt="Arrow Back"/>
        <h1 className="add-edit-inventory__title">Add New Inventory Item</h1>
      </div>
      <form className="add-edit-inventory__form">
        <div className='form__main'>
          <div className="form__item-details">
            <h2 className="form__title">Item Details</h2>
            <label className="form__label" htmlFor="name">Item Name</label>
            <input id="name" name="name" className="form__input" type="text" placeholder='Item Name'/>
            <label className="form__label" htmlFor="description">Description</label>
            <textarea id="description" name="description" className="form__textarea" placeholder='Please enter a brief item description...'></textarea>
            <label className="form__label" htmlFor="category">Category</label>
            <select id="category" name="category" className="form__input" defaultValue={categoryValue} onChange={handleCategoryChange}>
              <option value="default" disabled>Please Select</option>

              {filteredCategoryArray.map((item) => (
                <option key={uuidv4()} value={item}>{item}</option>
              ))}
              
            </select>
          </div>
          <div className="form__item-availability">
            <h2 className="form__title">Item Availability</h2>
            <p className="form__label">Status</p>
            <div>
              <input type="radio" id="in-stock" name="status" value="in-stock" defaultChecked/>
              <label htmlFor="in-stock">In stock</label>
            </div>
            <div>
              <input type="radio" id="out-of-stock" name="status" value="out-of-stock"/>
              <label htmlFor="out-of-stock">Out of stock</label>
            </div>
            
            <label className="form__label" htmlFor="quantity">Quantity</label>
            <input id="quantity" name="quantity" className="form__input" type="number" placeholder='0'/>

            <label className="form__label" htmlFor="warehouse">Warehouse</label>
            <select id="warehouse" name="warehouse" className="form__input" defaultValue={categoryValue} onChange={handleWarehouseChange}>
              <option value="default" disabled>Please select</option>
              {filteredWarehousesArray.map((warehouse) => (
                <option key={uuidv4()} value={warehouse}>{warehouse}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="form__bottom">
          <button className='form__button--cancel'>Cancel</button>
          <button className='form__button' type='submit'>+ Add Item</button>
        </div>
        
      </form>
    </div>
  )
}

export default AddEditInventory