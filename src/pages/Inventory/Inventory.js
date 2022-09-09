import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import Sort from "../../assets/icons/sort-24px.svg";
import "./Inventory.scss";

const Inventory = () => {
  const [inventories, setInventories] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/inventory").then((response) => {
      setInventories(response.data);
    });
  }, []);

  if (!inventories) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="inventory">
      <div className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__wrap">
          <input className="inventory__search" placeholder="Search..." />
          <button className="inventory__add">+ Add New Item</button>
        </div>
      </div>

      <div className="inventory__container">
        <div className="inventory__container--box">
          <h4 className="inventory__container--title">inventory item</h4>
          <img
            className="inventory__container--icon"
            src={Sort}
            alt="sort-arrow"
          />
        </div>
        <div className="inventory__container--box">
          <h4 className="inventory__container--title">category</h4>
          <img
            className="inventory__container--icon"
            src={Sort}
            alt="sort-arrow"
          />
        </div>
        <div className="inventory__container--box">
          <h4 className="inventory__container--title">status</h4>
          <img
            className="inventory__container--icon"
            src={Sort}
            alt="sort-arrow"
          />
        </div>
        <div className="inventory__container--box">
          <h4 className="inventory__container--title">qty</h4>
          <img
            className="inventory__container--icon"
            src={Sort}
            alt="sort-arrow"
          />
        </div>
        <div className="inventory__container--box">
          <h4 className="inventory__container--title">warehouse</h4>
          <img
            className="inventory__container--icon"
            src={Sort}
            alt="sort-arrow"
          />
        </div>
        <h4 className="inventory__container--title inventory__container--action">
          actions
        </h4>
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
  );
};

export default Inventory;
