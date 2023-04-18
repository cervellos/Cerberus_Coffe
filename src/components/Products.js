import Image from "next/image";
import React from "react";
import { data } from "../utils/data";
import { Grid, GirdItem, Card } from "@chakra-ui/react";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.products.map((product) => (
          <Image
            key={product.id}
            height={230}
            width={230}
            src={`/images/${product.image}`}
            style={{ objectFit: "cover", height: "230px" }}
            alt={product.title}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Products;
