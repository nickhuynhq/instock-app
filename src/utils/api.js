import axios from 'axios';

const BASE_URL = `http://localhost:8081`;

export const fetchInventoryById = (inventoryId) => {
    return axios.get(`${BASE_URL}/inventory/${inventoryId}`);
}

export const addNewWarehouse = (body) => {
    return axios.post(`${BASE_URL}/warehouse/add`, body);
}

export const editWarehouse = (body, warehouseId) => {
    return axios.post(`${BASE_URL}/warehouse/${warehouseId}/edit`, body);
}