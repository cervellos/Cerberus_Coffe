import React from "react";
import Head from "next/head";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-commerce APP</title>
      </Head>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.600")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          spacing={2}
        >
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center" }}
            align={"center"}
          >
            <Text
              fontFamily={"Heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              copywritten 2023
            </Text>
          </Flex>
        </Flex>
      </Box>
      {children}
    </div>
  );
};

export default Layout;
