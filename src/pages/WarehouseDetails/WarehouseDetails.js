import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import InventoryCard from "../../components/InventoryCard/InventoryCard";
import axios from "axios";

const WareHouseDetails = () => {
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState("");
  // const [details, setDetails] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/warehouse/${warehouseId}`)
      .then((response) => {
        setWarehouse(response.data);
      });
  }, [warehouseId]);

  // useEffect(() => {
  //   axios.get("http://localhost:8081/").then((response) => {
  //     setDetails(response.data);
  //   });
  // }, [warehouseId]);

  if (warehouse === "") {
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
        {/* <div className="inventory-list">
          {details.map((detail) => {
            return (
              <InventoryCard
                key={detail.id}
                id={detail.id}
                itemName={detail.itemName}
                category={detail.category}
                status={detail.status}
                quantity={detail.quantity}
              />
            );
          })}
        </div> */}
      </section>
    </main>
  );
};

export default WareHouseDetails;
