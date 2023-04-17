import Image from "next/image";
import React from "react";
import { data } from "../utils/data";

const Products = () => {
  return (
    <div>
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
    </div>
  );
};

export default Products;
