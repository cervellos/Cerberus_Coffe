import React from "react";
import Head from "next/head";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Head>
        <title>Cerberus Coffe</title>
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
              Logo
            </Text>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"Link"}
              href="#"
            >
              Sign In
            </Button>
            <Button display={{ base: "none", md: "inlline-flex" }}></Button>
          </Stack>
        </Flex>
      </Box>
      {children}
    </div>
  );
};

export default Layout;
