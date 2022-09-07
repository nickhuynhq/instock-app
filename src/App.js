import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import AddEditWarehouse from "./pages/AddEditWarehouse/AddEditWarehouse";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Warehouses />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/add" element={<AddEditWarehouse />} />
          <Route
            path="/warehouses/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route
            path="/warehouses/:warehouseId/edit"
            element={<AddEditWarehouse />}
          />
          <Route path="/inventory/add" element={<AddEditInventory />} />
          <Route
            path="/inventory/:inventoryId"
            element={<InventoryDetails />}
          />
          <Route
            path="/inventory/inventoryId/edit"
            element={<AddEditInventory />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
