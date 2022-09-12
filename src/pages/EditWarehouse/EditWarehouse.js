import "../AddWarehouse/AddEditWarehouse.scss";
import iconURL from "../../assets/icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import { editWarehouse, fetchWarehouses } from "../../utils/api";
import { useEffect, useState } from "react";
import IsUploaded from "../../components/IsUploaded/IsUploaded";

const EditWarehouse = () => {
    const { warehouseId } = useParams();
    const [isUploaded, setIsUploaded] = useState(false);
    const handleUploadAgain = () => {
        setIsUploaded(!isUploaded);
    };
    const [foundWarehouse, setFoundWarehouse] = useState(null);

    useEffect(()=> {
      fetchWarehouses()
      .then((resolve) => {
        const warehouses = resolve.data;
        const warehouse = warehouses.find(warehouse => warehouse.id === warehouseId);
        setFoundWarehouse(warehouse);
      }).catch((error) => {
        console.log(error)
      })
    }, [])

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
                email: event.target.email.value,
            },
        };

        editWarehouse(warehouse, warehouseId)
            .then((resolve) => {
                setIsUploaded(true);
            })
            .catch((error) => {
                console.log(error);
            });

        event.target.reset();
    };

    if (!foundWarehouse) {
      return <p>Loading</p>;
    }

    return (
        <>
            {isUploaded && (
                <IsUploaded
                    handleUploadAgain={handleUploadAgain}
                    btnText="Update Another Information"
                    modalText="Warehouse Updated!"
                />
            )}
            <section className="warehouse">
                <div className="warehouse__title">
                    <Link to="/warehouses">
                        <img
                            src={iconURL}
                            alt="back"
                            className="warehouse__img"
                        />
                    </Link>
                    <h1 className="warehouse__title-text">Edit Warehouse</h1>
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
                                    className="warehouse__input"
                                    name="name"
                                    defaultValue={foundWarehouse.name}
                                />
                            </label>
                            <label className="warehouse__label">
                                {" "}
                                Street Address
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="address"
                                    defaultValue={foundWarehouse.address}
                                />
                            </label>
                            <label className="warehouse__label">
                                {" "}
                                City
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="city"
                                    defaultValue={foundWarehouse.city}
                                />
                            </label>
                            <label className="warehouse__label">
                                {" "}
                                Country
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="country"
                                    defaultValue={foundWarehouse.country}
                                />
                            </label>
                        </div>
                        <div className="warehouse__contact">
                            <h2>Contact Details</h2>
                            <label className="warehouse__label">
                                {" "}
                                Contact Name
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="contactName"
                                    defaultValue={foundWarehouse.contact.name}
                                />
                            </label>
                            <label className="warehouse__label">
                                {" "}
                                Position
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="position"
                                    defaultValue={foundWarehouse.contact.position}
                                />
                            </label>
                            <label className="warehouse__label">
                                {" "}
                                Phone Number
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="phoneNumber"
                                    defaultValue={foundWarehouse.contact.phone}
                                />
                            </label>
                            <label className="warehouse__label">
                                {" "}
                                Email
                                <input
                                    type="text"
                                    className="warehouse__input"
                                    name="email"
                                    defaultValue={foundWarehouse.contact.email}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="warehouse__btn-container">
                        <Link
                            className="warehouse__btn warehouse__btn--cancel"
                            to="/"
                        >
                            Cancel
                        </Link>
                        <button className="warehouse__btn">Save</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default EditWarehouse;
