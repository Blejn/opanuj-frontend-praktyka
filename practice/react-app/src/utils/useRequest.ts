import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
    throw new Error('VITE_API_URL is not defined in the .env file');
  }
  
  export const request = axios.create({
    baseURL,
  });