import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import axios from "axios";
import { fetchInventory } from "../../utils/api";

const WareHouseDetails = () => {
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState("");
  const [inventories, setInventories] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/warehouse/${warehouseId}`)
      .then((response) => {
        setWarehouse(response.data);
        return fetchInventory();
      })
      .then((response) => {
        setInventories(response.data);
      });
  }, [warehouseId]);

  if (warehouse === "" || inventories === "") {
    return <h1>Loading . . .</h1>;
  }

  return (
    <main className="details">
      <section className="warehouse">
        <h1 className="warehouse__name">{warehouse.name}</h1>
        <div className="warehouse__details">
          <span className="warehouse__label">Warehouse Address</span>
          <span className="warehouse__address">{warehouse.address}</span>
        </div>
        <div className="inventory-list">
          {inventories.map((inventory) => {
            if (warehouseId === inventory.warehouseID) {
              return (
                <InventoryCard
                  key={inventory.id}
                  id={inventory.id}
                  itemName={inventory.itemName}
                  category={inventory.category}
                  status={inventory.status}
                  quantity={inventory.quantity}
                />
              );
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default WareHouseDetails;
