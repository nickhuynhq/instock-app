import axios from 'axios';

const BASE_URL = `http://localhost:8081`;

export const fetchInventoryById = (inventoryId) => {
    return axios.get(`${BASE_URL}/inventory/${inventoryId}`);
}