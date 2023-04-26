import React from "react";

import { Image, AspectRatio, Link, useColorModeValue } from "@chakra-ui/react";

export const Bundle = () => {
  return (
    <Link>
      <AspectRatio
        maxW="100vw"
        ratio={16 / 6}
        margin={0}
        paddingTop={"10px"}
        bg={useColorModeValue("white", "black")}
      >
        <Image
          src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="naruto"
          objectFit="cover"
          filter="brightness(90%)"
        />
      </AspectRatio>
    </Link>
  );
};
export default Bundle;
