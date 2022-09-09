import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import Sort from "../../assets/icons/sort-24px.svg";
import "./Inventory.scss";
import { useParams, useNavigate } from "react-router-dom";

const Inventory = () => {
  const [inventories, setInventories] = useState(null);
  const { inventoryid } = useParams();
  console.log("beginning",inventoryid);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/inventory").then((response) => {
      setInventories(response.data);
    });
  }, []);

  if (!inventories) {
    return <h1>Loading...</h1>;
  } 

  const handleCancelClick = () => {
    navigate("/inventory");
  };

  const handleDeleteClick = (inventoryid) => {
    axios
      .delete(`http://localhost:8081/inventory/${inventoryid}`)
      .then((response) => {
        navigate("/inventory");
        return axios.get("http://localhost:8081/inventory");
      })
      .then((response) => {
        setInventories(response.data);
      });
  };

  let overlay = <></>;

  if (inventoryid !== undefined) {
    const item = inventories.find((item) => item.id === inventoryid);
    console.log("overlay",inventoryid);
    overlay = (
      <>
        <div className="overlay"></div>
        <div className="overlay__text">
          <img className="overlay__x" src={""} alt="X"></img>
          <h1 className="overlay__header">Delete {item.name} Warehouse?</h1>
          <p className="overlay__para">
            Please confirm that you'd like to delete {item.name} from the list
            of warehouses. You won't be able to undo this action
          </p>
          <div className="overlay__buttons">
            <button className="cancel" onClick={handleCancelClick}>
              Cancel
            </button>
            <button
              className="delete"
              onClick={() => {
                handleDeleteClick(inventoryid);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="overlay__box"></div>
      </>
    );
  }

  return (
    <>
      {overlay}
      <main className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__title">Inventory</h1>
          <div className="inventory__wrap">
            <input className="inventory__search" placeholder="Search..." />
            <button className="inventory__add">+ Add New Item</button>
          </div>
        </div>
        <div className="inventory-card">
          {inventories.map((inventory) => {
            return (
              
              <InventoryCard
                key={inventory.id}
                id={inventory.id}
                itemName={inventory.itemName}
                category={inventory.category}
                status={inventory.status}
                quantity={inventory.quantity}
                warehouseName={inventory.warehouseName}
              />

              
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Inventory;
