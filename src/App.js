import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from "./pages/Inventory/Inventory"
import AddEditWarehouse from './pages/AddEditWarehouse/AddEditWarehouse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/warehouses/:warehouseId/edit" element={<AddEditWarehouse />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
