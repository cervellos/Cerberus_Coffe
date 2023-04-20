import React from "react";
import { useRouter } from "next/router";
import { data } from "@/utils/data";

import {
  Container,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Stack,
  Box,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div> Product not found</div>;
  }
  return (
    <Container>
      <SimpleGrid columns={[1, 2]}>
        <Flex>
          <Image
            src={`/images/${product.image}`}
            rounded={"md"}
            fit={"cover"}
            aling={"center"}
            h={"100%"}
            alt={product.tittle}
            w={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            ></Heading>
            <Text>{product.descripcion}</Text>
          </Box>
          <Text>{product.descripcion}</Text>
          <Flex flexGrow={1} alignItems={"end"}>
            <Button>Add to cart</Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
