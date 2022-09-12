
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import AddInventory from "./pages/AddInventory/AddInventory";
import EditInventory from "./pages/EditInventory/EditInventory";
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
          path="/warehouses/add" element={<AddWarehouse />}
        />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/warehouses/:warehouseId/edit" element={<EditWarehouse />}
        />
        <Route 
          path="/inventory/add" 
          element={<AddInventory />} 
        />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route
          path="/inventory/:inventoryId/edit"
          element={<EditInventory />}
        />
        <Route path="/warehouses/:warehouseid/delete" element={<Warehouses />} />
        <Route path="/inventory/:inventoryid/delete" element={<Inventory />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
