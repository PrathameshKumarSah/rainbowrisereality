import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://realestate-api-hu2r.onrender.com/api" ,
  withCredentials: true,
});
