import { ProductsType } from "../types/ShoppingTypes";
import axiosInstance from "../utils/axiosInstance";

export const getProducts = async (): Promise<ProductsType[]> => {
  const response = await axiosInstance.get(`/products`);
  return response.data;
};
