import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const axiosIntance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosIntance;
