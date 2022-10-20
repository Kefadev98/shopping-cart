import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Box,
  Flex,
  Text,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import CartItem from "./CartItem";
import { CloseIcon } from "@chakra-ui/icons";
import { ShoppingContext } from "../../context/ShoppingContext";
import { useContext } from "react";

const Cart = () => {
  const shoppingCtx = useContext(ShoppingContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeDrawer = () => {
    onClose();
    shoppingCtx.setAlert(false);
  };

  return (
    <Box>
      <Flex
        w={"100%"}
        h={"70px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"#161D2F"}
      >
        <Heading color={"white"} ml={"20px"} fontSize={"3xl"}>
          Shopping Cart
        </Heading>
        <Flex>
          <Button
            color="#989898"
            border={"none"}
            mr={"20px"}
            bg={"transparent"}
            fontSize={"3xl"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <FiShoppingCart />
            <Box
              w={"15px"}
              h={"15px"}
              mt={"20px"}
              bg={"red"}
              borderRadius={"50%"}
              textAlign={"center"}
            >
              <Text fontSize={"x-small"} color={"white"} mt={"2px"}>
                {shoppingCtx.cartItems?.length}
              </Text>
            </Box>
          </Button>
        </Flex>
      </Flex>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent
          bg={"rgba(0,0,0,.6)"}
          display={"flex"}
          alignItems={"flex-end"}
        >
          <Flex w={"400px"} bg={"#161D2F"}>
            <Button
              onClick={() => closeDrawer()}
              w={"50px"}
              h={"50px"}
              cursor={"pointer"}
              border={"none"}
              bg={"#161D2F"}
              color={"white"}
            >
              <CloseIcon />
            </Button>
          </Flex>
          <DrawerHeader
            borderBottomWidth="1px"
            width={"400px"}
            bg={"#161D2F"}
            fontSize={"1.2rem"}
            py={"10px"}
            color={"white"}
          >
            <Text ml={"10px"}>Your Shopping Cart</Text>
          </DrawerHeader>

          <DrawerBody
            w={"400px"}
            bg={"#161D2F"}
            opacity={"0.9"}
            h={"100%"}
            color={"#FBF6F5"}
          >
            {shoppingCtx.cartItems?.length === 0 ? (
              <Text fontSize={"small"} m={"10px 0 0 10px"}>
                No items in cart.
              </Text>
            ) : null}
            {shoppingCtx.cartItems?.map((item) => (
              <Box
                py={"15px"}
                borderBottom={"1px solid white"}
                w={"100%"}
                h={"200px"}
                key={item.id}
              >
                <CartItem item={item} />
              </Box>
            ))}
            <Text fontSize={"large"} m={"20px 0 20px 10px"} fontWeight={"bold"}>
              Total: $
              {shoppingCtx.calculateTotal(shoppingCtx.cartItems).toFixed(2)}
            </Text>
            {shoppingCtx.cartItems.length > 0 && (
              <Button
                colorScheme={"blue"}
                type={"submit"}
                w={"100%"}
                mb={"20px"}
                onClick={() => shoppingCtx.setAlert(true)}
              >
                BUY
              </Button>
            )}
            {shoppingCtx.alert && shoppingCtx.cartItems.length > 0 ? (
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg" color={"gray"}>
                  Order Confirmed
                </AlertTitle>
                <AlertDescription maxWidth="sm" color={"gray"}>
                  Thank you for your order. Our team will send it as soon as
                  possible.
                </AlertDescription>
              </Alert>
            ) : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Cart;
