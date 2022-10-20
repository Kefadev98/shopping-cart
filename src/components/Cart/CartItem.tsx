import { ProductsType } from "../../types/ShoppingTypes";
import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import { ShoppingContext } from "../../context/ShoppingContext";
import { useContext } from "react";

type Props = {
  item: ProductsType;
};

const CartItem = ({ item }: Props) => {
  const shoppingCtx = useContext(ShoppingContext);

  return (
    <>
      <Heading ml={"10px"} fontSize={"medium"}>
        {item.title}
      </Heading>
      <Flex display={"flex"} justifyContent={"space-around"} mt={"20px"}>
        <Flex w={"60%"} direction={"column"} justifyContent={"space-around"}>
          <Flex justifyContent={"space-between"} w={"100%"} fontSize={"small"}>
            <Text>Price: ${item.price}</Text>
            <Text>Total: ${(item.amount * item.price).toFixed(2)}</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            w={"100%"}
            alignItems={"center"}
          >
            <Button
              colorScheme="blue"
              cursor={"pointer"}
              onClick={() => shoppingCtx.handleRemoveFromCart(item.id)}
            >
              -
            </Button>
            <Text>{item.amount}</Text>
            <Button
              colorScheme="blue"
              cursor={"pointer"}
              onClick={() => shoppingCtx.handleAddToCart(item)}
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Flex
          w={"32%"}
          bg={"white"}
          borderRadius={"0.5rem"}
          justifyContent={"center"}
        >
          <Image src={item.image} alt={item.title} w={"85px"} h={"105px"} />
        </Flex>
      </Flex>
    </>
  );
};

export default CartItem;
