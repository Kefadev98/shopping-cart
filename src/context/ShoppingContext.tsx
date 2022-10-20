import { createContext, useState } from "react";
import { ProductsType } from "../types/ShoppingTypes";

type ShoppingContextProps = {
  cartItems: ProductsType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductsType[]>>;
  handleAddToCart: (clickedItem: ProductsType) => void;
  handleRemoveFromCart: (id: number) => void;
  calculateTotal: (items: ProductsType[]) => number;
  alert: boolean;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

type ShoppingContextProviderProps = {
  children: React.ReactNode;
};

export const ShoppingContext = createContext({} as ShoppingContextProps);

export const ShoppingContextProvider = ({
  children,
}: ShoppingContextProviderProps) => {
  const [cartItems, setCartItems] = useState([] as ProductsType[]);
  const [alert, setAlert] = useState<boolean>(false);

  //Add items in array
  const handleAddToCart = (clickedItem: ProductsType) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      setAlert(false);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  //Remove items from array
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((prevItem, item) => {
        setAlert(false);
        if (item.id === id) {
          if (item.amount === 1) return prevItem;
          return [...prevItem, { ...item, amount: item.amount - 1 }];
        } else {
          return [...prevItem, item];
        }
      }, [] as ProductsType[])
    );
  };

  //Calculate total amount
  const calculateTotal = (items: ProductsType[]) => {
    return items.reduce(
      (prevItem: number, item) => prevItem + item.amount * item.price,
      0
    );
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveFromCart,
        calculateTotal,
        alert,
        setAlert,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
