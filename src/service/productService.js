import axios from 'axios';
import { BASE_URL } from '../config/config';

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/api/Producto`);
  return response.data;
};
