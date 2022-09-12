import React from 'react'
import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate, useParams} from 'react-router-dom';
import { fetchInventory, fetchWarehouses, editInventoryItem, fetchInventoryById } from '../../utils/api';
import IsUploaded from "../../components/IsUploaded/IsUploaded";
import "./EditInventory.scss"

const EditInventory = () => {

  const [inventoryData, setInventoryData] = useState(null)
  const [warehousesData, setWarehousesData] = useState(null)
  const [itemAvailability, setItemAvailability] = useState("in-stock");
  const [inventoryItem, setInventoryItem] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const { inventoryId } = useParams();
  let navigate = useNavigate(); 
 
  // Handle Item Availability Status Select
  const handleStatusSelect = (e) => { 
    setItemAvailability(e.target.value)
  }

  const handleCancel = () => {
    navigate("/inventory")
  }

  const handleEditInventoryItem = (event) => {
    event.preventDefault();
    const warehouse = event.target.warehouse.value;
    const name = event.target.name.value.trim();
    const description = event.target.description.value.trim();
    const category = event.target.category.value;
    const status = event.target.status.value;
    const quantity = event.target.quantity.value;

    const item = {
      "id": inventoryId,
      "warehouseName": warehouse,
      "itemName": name,
      "description": description,
      "category": category,
      "status": status,
      "quantity": quantity
    }

    if (name && description && quantity >= 0) {
      window.scrollTo(0,0);
      editInventoryItem(item).then(()=>{
        setIsUploaded(true);
      });
    } else {
      alert("Item has not been edited")
    }
  };

  const handleUploadAgain = () => {
    setIsUploaded(!isUploaded);
  }

  useEffect(() => {
    fetchInventory()
      .then((response) => {
        setInventoryData(response.data);
        return fetchWarehouses()
      })
      .then((response) => {
        setWarehousesData(response.data);
        return fetchInventoryById(inventoryId)
      })
      .then((response) => {
        setInventoryItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [itemAvailability, inventoryId])


  if (!inventoryData || !warehousesData || !inventoryItem) {
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
      {isUploaded && <IsUploaded handleUploadAgain={handleUploadAgain} btnText="Update Another Information" modalText="Inventory Updated!"/>}
      <div className="add-edit-inventory-top">
        <img className="add-edit-inventory__back-button" src={ArrowBack} onClick={handleCancel} alt="Arrow Back"/>
        <h1 className="add-edit-inventory__title">Edit Inventory Item</h1>
      </div>
      <form className="add-edit-inventory__form" onSubmit={handleEditInventoryItem}>
        <div className='form__main'>
          <div className="form__item-details">
            <h2 className="form__title">Item Details</h2>
            <label className="form__label" htmlFor="name">Item Name</label>
            <input id="name" name="name" className="form__input" type="text" placeholder='Item Name' defaultValue={inventoryItem.itemName}/>
            <label className="form__label" htmlFor="description">Description</label>
            <textarea id="description" name="description" className="form__textarea" placeholder='Please enter a brief item description...' defaultValue={inventoryItem.description}></textarea>
            <label className="form__label" htmlFor="category">Category</label>
            <select id="category" name="category" className="form__input" defaultValue={inventoryItem.category}>
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
              <input type="radio" id="in-stock" name="status" value="In Stock" defaultChecked onChange={handleStatusSelect}/>
              <label htmlFor="in-stock">In stock</label>
            </div>
            <div>
              <input type="radio" id="out-of-stock" name="status" value="Out of Stock" onChange={handleStatusSelect}/>
              <label htmlFor="out-of-stock">Out of stock</label>
            </div>
            <label className={itemAvailability==="in-stock" ? "form__label" : "form__label--hidden" } htmlFor="quantity" >Quantity</label>
            <input id="quantity" name="quantity" className={itemAvailability==="in-stock" ? "form__input" : "form__input--hidden" } type="number" defaultValue={inventoryItem.quantity}/>

            <label className="form__label" htmlFor="warehouse">Warehouse</label>
            <select id="warehouse" name="warehouse" className="form__input" defaultValue={inventoryItem.warehouse}>
              <option value="default" disabled>Please Select</option>
                {filteredWarehousesArray.map((warehouse) => (
                  <option key={uuidv4()} value={warehouse}>{warehouse}</option>
                ))}
            </select>
          </div>
        </div>
        
        <div className="form__bottom">
          <button className='form__button--cancel' onClick={handleCancel}>Cancel</button>
          <button className='form__button' type='submit'>Save</button>
        </div>
        
      </form>
    </div>
  )
}

export default EditInventory