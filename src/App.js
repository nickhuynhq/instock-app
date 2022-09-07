import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from "./pages/Inventory/Inventory"
import AddEditWarehouse from './pages/AddEditWarehouse/AddEditWarehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import InventoryDetails from './pages/InventoryDetails/InventoryDetails';
import AddEditInventory from './pages/AddEditInventory/AddEditInventory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/add" element={<AddEditWarehouse title="Add New Warehouse" buttonText="Add Warehouse"/>} />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/warehouses/:warehouseId/edit" element={<AddEditWarehouse />} />
        <Route path="/inventory/add" element={<AddEditInventory/>} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route path="/inventory/:inventoryId/edit" element={<AddEditInventory title="Edit Warehouse"/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
