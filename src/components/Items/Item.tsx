import { ProductsType } from "../../types/ShoppingTypes";
import { Text, Image, Heading, Button, Flex } from "@chakra-ui/react";
import { ShoppingContext } from "../../context/ShoppingContext";
import { useContext } from "react";

type Props = {
  item: ProductsType;
};

const Item = ({ item }: Props) => {
  const shoppingCtx = useContext(ShoppingContext);

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"400px"}
      h={"600px"}
      direction={"column"}
      boxShadow={"2xl"}
      borderRadius={"20px"}
      mb={"100px"}
      bg={"#161D2F"}
    >
      <Flex
        w={"100%"}
        bg={"white"}
        justifyContent={"center"}
        borderTopRadius={"0.5rem"}
      >
        <Image
          src={item.image}
          alt={item.title}
          objectFit={"cover"}
          maxH={"200px"}
          mt={"10px"}
        />
      </Flex>

      <Flex mx={"20px"} direction={"column"}>
        <Heading fontSize={"1.3rem"} color={"#FFF"}>
          {item.title}
        </Heading>
        <Heading my={"10px"} fontSize={"3xl"} color={"#FFF"}>
          ${item.price}
        </Heading>
        <Text fontSize={".7rem"} color={"#FFF"}>
          {item.description}
        </Text>
      </Flex>
      <Button
        colorScheme="blue"
        variant="solid"
        w="100%"
        fontSize="sm"
        borderTopRadius="none"
        onClick={() => shoppingCtx.handleAddToCart(item)}
      >
        Add to cart
      </Button>
    </Flex>
  );
};

export default Item;
