import './EditWarehouse.scss';
import iconURL from '../../assets/icons/arrow_back-24px.svg';
import { Link, useParams } from 'react-router-dom';
import { editWarehouse } from '../../utils/api';

const EditWarehouse = () => {
      const {warehouseId} = useParams();
   const handleSubmit = (event) => {

    event.preventDefault();
    const warehouse = {
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact: {
        name: event.target.contactName.value,
        position: event.target.position.value,
        phone: `+1 ${event.target.phoneNumber.value}`,
        email: event.target.email.value
      }
    }

      editWarehouse(warehouse, warehouseId)
      .then(()=>{
        alert("Warehouse edited!");
      })

    event.target.reset();
   }

  return (
    <>
      <section className="warehouse">
        <div className="warehouse__title">
          <img src={iconURL} alt="" className="warehouse__img" />
          <h1 className="warehouse__title-text">Edit Warehouse</h1>
        </div>
        <form className="warehouse__form" onSubmit={handleSubmit}>
          <div className="warehouse__form-container">
            <div className="warehouse__details">
              <h2>Warehouse Details</h2>
              <label className="warehouse__label"> Warehouse Name
                <input type="text" className="warehouse__input" name="name"/>
              </label>
              <label className="warehouse__label"> Street Address
                <input type="text" className="warehouse__input" name="address"/>
              </label>
              <label className="warehouse__label"> City
                <input type="text" className="warehouse__input" name="city"/>
              </label>
              <label className="warehouse__label"> Country
                <input type="text" className="warehouse__input" name="country"/>
              </label>
            </div>
            <div className="warehouse__contact">
            <h2>Contact Details</h2>
              <label className="warehouse__label"> Contact Name
                <input type="text" className="warehouse__input" name="contactName"/>
              </label>
              <label className="warehouse__label"> Position
                <input type="text" className="warehouse__input" name="position"/>
              </label>
              <label className="warehouse__label"> Phone Number
                <input type="text" className="warehouse__input" name="phoneNumber"/>
              </label>
              <label className="warehouse__label"> Email
                <input type="text" className="warehouse__input" name="email"/>
              </label>
            </div>
          </div>
          <div className="warehouse__btn-container">
            <Link className="warehouse__btn warehouse__btn--cancel" to="/">Cancel</Link>
            <button className="warehouse__btn">Save</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default EditWarehouse