import React from 'react'
import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import "./AddEditInventory.scss"

const AddEditInventory = () => {

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
            <input id="name" name="name" className="form__text-input"type="text"/>
            <label className="form__label" htmlFor="description">Description</label>
            <textarea id="description" name="description" className="form__text-area"></textarea>
            <label className="form__label" htmlFor="category">Category</label>
            <select id="category" name="category" className="form__select-input">
              <option value="electronics">Electronics</option>
            </select>
          </div>
          <div className="form__item-availability">
            <h2 className="form__title">Item Availability</h2>

            <p className="form__label">Status</p>
            <div>
              <input type="radio" id="in-stock" name="status" value="in-stock"/>
              <label htmlFor="in-stock">In stock</label>
            </div>

            <div>
              <input type="radio" id="out-of-stock" name="status" value="out-of-stock"/>
              <label htmlFor="out-of-stock">Out of stock</label>
            </div>
            
            <label className="form__label" htmlFor="quantity">Quantity</label>
            <input id="quantity" name="quantity" className="form__number-input" type="number"/>

            <label className="form__label" htmlFor="warehouse">Warehouse</label>
            <select id="warehouse" name="warehouse" className="form__select-input">
              <option value="">Please select</option>
            </select>
          </div>
        </div>
        
        <div className="form__bottom">
          <button>Cancel</button>
          <button type='submit'>+ Add Item</button>
        </div>
        
      </form>
    </div>
  )
}

export default AddEditInventory