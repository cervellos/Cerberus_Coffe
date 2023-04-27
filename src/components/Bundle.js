import React from "react";

import {
  Image,
  AspectRatio,
  Link,
  useColorModeValue,
  Box,
  Button,
} from "@chakra-ui/react";

export const Bundle = () => {
  return (
    <Link>
      <AspectRatio
        maxW="99vw"
        ratio={14 / 6}
        border={"black solid 15px"}
        paddingTop={"10px"}
        bg={useColorModeValue("white", "black")}
      >
        <Box
          backgroundImage="url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          zIndex={4}
          overflow={"hidden"}
          opacity={"0.5"}
        >
          <Box
            zIndex={1}
            paddingLeft={"25%"}
            paddingRight={"25%"}
            color={"white"}
            fontSize={"2vw"}
          >
            ¡Bienvenidos al mundo del café! En nuestra compañía, nos apasiona el
            café y nos esforzamos por brindar la mejor experiencia a nuestros
            clientes. Desde la selección cuidadosa de los granos de café hasta
            el proceso de tostado y preparación, cada taza de café que servimos
            es un testimonio de nuestro compromiso con la calidad y el sabor
            excepcional. ¡Únete a nosotros en esta aventura de café y descubre
            todo lo que tenemos para ofrecer!
            <Button top={50} right={800} bg={"brand.mainColor"}>
              Conocer mas de nosotros
            </Button>
          </Box>
        </Box>
      </AspectRatio>
    </Link>
  );
};
export default Bundle;
