import { ChakraProvider, Box } from "@chakra-ui/react";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";
import { ShoppingContextProvider } from "./context/ShoppingContext";
import "@fontsource/poppins/400.css";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box background={"#202b47"}>
      <ShoppingContextProvider>
        <Cart />
        <Items />
      </ShoppingContextProvider>
    </Box>
  </ChakraProvider>
);
