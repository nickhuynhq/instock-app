import "./AddEditWarehouse.scss";
import iconURL from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import { addNewWarehouse } from "../../utils/api";
import { useState } from "react";
import IsUploaded from "../../components/IsUploaded/IsUploaded";
import FormRequiredMessage from "../../components/FormRequiredMessage/FormRequiredMessage";

const AddWarehouse = () => {
    const [isUploaded, setIsUploaded] = useState(false);

    // Form Input Validation States (warehouse)
    const [warehouseNameValid, setWarehouseNameValid] = useState(true);
    const [addressValid, setAddressValid] = useState(true);
    const [cityValid, setCityValid] = useState(true);
    const [countryValid, setCountryValid] = useState(true);
    // Form Input Validation States (contact)
    const [contactNameValid, setContactNameValid] = useState(true);
    const [positionValid, setPositionValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);

    const handleUploadAgain = () => {
      setIsUploaded(!isUploaded);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Reset validation states when submitted
        setWarehouseNameValid(true);
        setAddressValid(true);
        setCityValid(true);
        setCountryValid(true);
        setContactNameValid(true);
        setPositionValid(true);
        setPhoneValid(true);
        setEmailValid(true);

        const warehouse = {
            name: event.target.name.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value,
            contact: {
                name: event.target.contactName.value,
                position: event.target.position.value,
                phone: `+1 ${event.target.phoneNumber.value}`,
                email: event.target.email.value,
            },
        };

        if (!event.target.name.value){
            setWarehouseNameValid(false)
        }
        if (!event.target.address.value){
            setAddressValid(false)
        }
        if (!event.target.city.value){
            setCityValid(false)
        }
        if (!event.target.country.value){
            setCountryValid(false)
        }
        if (!event.target.contactName.value){
            setContactNameValid(false)
        }
        if (!event.target.position.value){
            setPositionValid(false)
        }
        if (!event.target.phoneNumber.value){
            setPhoneValid(false)
        }
        if (!event.target.email.value){
            setEmailValid(false)
        }
        if (event.target.address.value 
            && event.target.address.value 
            && event.target.city.value 
            && event.target.country.value
            && event.target.contactName.value
            && event.target.position.value
            && event.target.phoneNumber.value
            && event.target.email.value) {
                addNewWarehouse(warehouse)
                .then(() => {
                    setIsUploaded(true);
                })
                .catch((error) => {
                    console.log(error);
                });

                event.target.reset();
        } else {
            // Add Failed Module Here
        }
    };
    return (
        <>
            {isUploaded && <IsUploaded handleUploadAgain={handleUploadAgain} btnText="Add Another Warehouse" modalText="Warehouse Added!"/>}
            <section className="warehouse">
                <div className="warehouse__title">
                    <Link to="/warehouses">
                        <img
                            src={iconURL}
                            alt="back"
                            className="warehouse__img"
                        />
                    </Link>
                    <h1 className="warehouse__title-text">Add New Warehouse</h1>
                </div>
                <form className="warehouse__form" onSubmit={handleSubmit}>
                    <div className="warehouse__form-container">
                        <div className="warehouse__details">
                            <h2>Warehouse Details</h2>
                            <label className="warehouse__label">
                                {" "}
                                Warehouse Name
                                <input
                                    type="text"
                                    className={warehouseNameValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="name"
                                />
                            </label>
                            {!warehouseNameValid && <FormRequiredMessage />}
                            <label className="warehouse__label">
                                {" "}
                                Street Address
                                <input
                                    type="text"
                                    className={addressValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="address"
                                />
                            </label>
                            {!addressValid && <FormRequiredMessage />}
                            <label className="warehouse__label">
                                {" "}
                                City
                                <input
                                    type="text"
                                    className={cityValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="city"
                                />
                            </label>
                            {!cityValid && <FormRequiredMessage />}
                            <label className="warehouse__label">
                                {" "}
                                Country
                                <input
                                    type="text"
                                    className={countryValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="country"
                                />
                            </label>
                            {!countryValid && <FormRequiredMessage />}
                        </div>
                        <div className="warehouse__contact">
                            <h2>Contact Details</h2>
                            <label className="warehouse__label">
                                {" "}
                                Contact Name
                                <input
                                    type="text"
                                    className={contactNameValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="contactName"
                                />
                            </label>
                            {!contactNameValid && <FormRequiredMessage />}
                            <label className="warehouse__label">
                                {" "}
                                Position
                                <input
                                    type="text"
                                    className={positionValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="position"
                                />
                            </label>
                            {!positionValid && <FormRequiredMessage />}
                            <label className="warehouse__label">
                                {" "}
                                Phone Number
                                <input
                                    type="text"
                                    className={phoneValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="phoneNumber"
                                />
                            </label>
                            {!phoneValid && <FormRequiredMessage />}
                            <label className="warehouse__label">
                                {" "}
                                Email
                                <input
                                    type="text"
                                    className={emailValid ? "warehouse__input" : "warehouse__input--invalid"}
                                    name="email"
                                />
                            </label>
                            {!emailValid && <FormRequiredMessage />}
                        </div>
                    </div>
                    <div className="warehouse__btn-container">
                        <Link
                            className="warehouse__btn warehouse__btn--cancel"
                            to="/"
                        >
                            Cancel
                        </Link>
                        <button className="warehouse__btn">
                            + Add Warehouse
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddWarehouse;
