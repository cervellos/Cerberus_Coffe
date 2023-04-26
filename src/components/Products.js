import Image from "next/image";
import React from "react";
import { data } from "../utils/data";
import {
  Grid,
  GridItem,
  Card,
  Box,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
        gap={6}
        paddingTop={"50px"}
        bg={useColorModeValue("white", "black")}
        borderColor={useColorModeValue("white", "black")}
      >
        {data.products.map((product) => (
          <GridItem key={product.id} colSpan={1}>
            <Card width={"fit-content"} padding={"5px"} bg={"brand.mainColor"}>
              <Link href={`/product/${product.id}`}>
                <Image
                  key={product.id}
                  height={230}
                  width={230}
                  src={`/images/${product.image}`}
                  style={{ objectFit: "cover", height: "230px" }}
                  alt={product.title}
                />
                <Box
                  bg={useColorModeValue("brand.mainColor", "black")}
                  border={"5px solid black"}
                  borderColor={useColorModeValue("brand.mainColor", "black")}
                >
                  <h3>{product.title}</h3>
                  <div>{product.descripcion}</div>
                  <div>${product.price}</div>
                  <Button
                    rounded={"md"}
                    bg={useColorModeValue("black", "brand.mainColor")}
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Link>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
