import React from "react";
import { useRouter } from "next/router";
import { data } from "../../utils/data";
import {
  Container,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Stack,
  Box,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = data.products.find((product) => product.id === parseInt(id));

  /**if (!product) {
    return <div> Product not found</div>;
  } */
  return (
    <Container maxW={"container.xl"} mt={2}>
      <SimpleGrid columns={[1, 2]} spacing={2}>
        <Flex>
          <Image
            src={`../images/${product.image}`}
            rounded={"md"}
            fit={"cover"}
            aling={"center"}
            h={"100%"}
            alt={product.title}
            w={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >{`$${product.price} ARG`}</Text>
          </Box>
          <Text>{product.descripcion}</Text>
          <Flex flexGrow={1} alignItems={"end"}>
            <Button
              rounded={"md"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
            >
              Add to cart
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
