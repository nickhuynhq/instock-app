import './AddEditWarehouse.scss';
import iconURL from '../../assets/icons/arrow_back-24px.svg';
import addURL from '../../assets/icons/close-24px.svg';
import { Link } from 'react-router-dom';

const AddEditWarehouse = ({title, buttonText}) => {
  
  return (
    <>
      <section className="warehouse">
        <div className="warehouse__title">
          <img src={iconURL} alt="" className="warehouse__img" />
          <h1>{title}</h1>
        </div>
        <form className="warehouse__form">
          <div className="warehouse__form-container">
            <div className="warehouse__details">
              <h2>Warehouse Details</h2>
              <label className="warehouse__label">
                Warehouse Name
                <input type="text" className="warehouse__input" />
              </label>
              <label className="warehouse__label">
                Street Address
                <input type="text" className="warehouse__input" />
              </label>
              <label className="warehouse__label">
                City
                <input type="text" className="warehouse__input" />
              </label>
              <label className="warehouse__label">
                Country
                <input type="text" className="warehouse__input" />
              </label>
            </div>
            <div className="warehouse__contact">
            <h2>Contact Details</h2>
              <label className="warehouse__label">
                Contact Name
                <input type="text" className="warehouse__input" />
              </label>
              <label className="warehouse__label">
                Position
                <input type="text" className="warehouse__input" />
              </label>
              <label className="warehouse__label">
                Phone Number
                <input type="text" className="warehouse__input" />
              </label>
              <label className="warehouse__label">
                Email
                <input type="text" className="warehouse__input" />
              </label>
            </div>
          </div>
          <div className="warehouse__btn-container">
            <Link className="warehouse__btn warehouse__btn--cancel" to="/">Cancel</Link>
            <button className="warehouse__btn">{buttonText}</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddEditWarehouse