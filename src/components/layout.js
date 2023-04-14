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
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              fontFamily={"Heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              logo
            </Text>
            <Stack
              flex={{ base: 2, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
              >
                Sign in
              </Button>
              <Button
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={useColorModeValue("pink.600")}
                variant={"link"}
              >
                Sign out
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </div>
  );
};

export default Layout;
