import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddEditWarehouse from "./pages/AddEditWarehouse/AddEditWarehouse";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import AddEditInventory from "./pages/AddEditInventory/AddEditInventory";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route
          path="/warehouses/add"
          element={
            <AddEditWarehouse
              title="Add New Warehouse"
              buttonText="+ Add Warehouse"
            />
          }
        />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouses/:warehouseId/edit"
          element={<AddEditWarehouse 
          title="Edit Warehouse"
          buttonText="Save"
          />}
        />
        <Route path="/inventory/add" element={<AddEditInventory />} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route
          path="/inventory/:inventoryId/edit"
          element={<AddEditInventory />}
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
