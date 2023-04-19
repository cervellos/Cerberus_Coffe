import Image from "next/image";
import React from "react";
import { data } from "../utils/data";
import { Grid, GridItem, Card, Box } from "@chakra-ui/react";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} gap={6}>
        {data.products.map((product) => (
          <GridItem key={product.id} colSpan={1}>
            <Card>
              <Link href={`/product/${product.id}`}>
                <Image
                  key={product.id}
                  height={230}
                  width={230}
                  src={`/images/${product.image}`}
                  style={{ objectFit: "cover", height: "230px" }}
                  alt={product.title}
                />
                <Box py={1} px={2}>
                  <h3>{product.title}</h3>
                  <div>{product.descripcion}</div>
                  <div>${product.price}</div>
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
