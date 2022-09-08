import axios from 'axios';
const BASE_URL = `http://localhost:8081`;

export const fetchInventory = () => {
    return axios.get(`${BASE_URL}/inventory/`);
}

export const fetchInventoryById = (inventoryId) => {
    return axios.get(`${BASE_URL}/inventory/${inventoryId}`);
}

export const addInventoryItem = (item) => {
    return axios.post(`${BASE_URL}/inventory/add`, item);
}

export const fetchWarehouses = () => {
    return axios.get(`${BASE_URL}/warehouse/`);
}

