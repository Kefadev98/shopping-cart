import useProducts from "../../query/useProductsQuery";
import { Spinner, Flex } from "@chakra-ui/react";
import Item from "./Item";

const Items = () => {
  const { data: products, isLoading, isError, error } = useProducts();
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-around"} mt={"20px"}>
      {isLoading && (
        <Flex w={"100%"} h={"100vh"} justifyContent={"center"}>
          <Spinner size="xl" />
        </Flex>
      )}
      {isError && <p>Error: {error.message}</p>}
      {products?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default Items;
