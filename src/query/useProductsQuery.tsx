import { useQuery } from "react-query";
import { getProducts } from "../services/shopServices";
import { ProductsType } from "../types/ShoppingTypes";

export const useProducts = () => {
  return useQuery<ProductsType[], Error>(["products"], getProducts, {
    onSuccess: (data) =>
      console.log(`Perform side effect after data fetching`, data),
    onError: (error) => console.error(`Something went wrong ${error.message}`),
  });
};

export default useProducts;
