import React, { use } from "react";
import Head from "next/head";
//import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  Image,
  Box,
  Flex,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Card,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Nav from "./nav";

export const Layout = ({ children }) => {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const colorBg = useColorModeValue("brand.mainColor", "black");

  if (!session) {
    return (
      <div>
        <Head>
          <title>Cerberus Coffe</title>
        </Head>
        <Box position={"fixed"} zIndex={"1"} width={"99vw"}>
          <Flex
            bg={colorBg}
            minH={"30px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={colorBg}
            align={"center"}
          >
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Image
                src={`/images/logo_new.jpg`}
                height={90}
                width={90}
                alt="logo"
                left={"0"}
              />
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
                fontSize={"sm"}
                fontWeight={400}
                onClick={() => signIn("google")}
              >
                Sign In
              </Button>
              <Button display={{ base: "none", md: "inlline-flex" }}>
                log out
              </Button>
            </Stack>
          </Flex>
        </Box>
        {children}
      </div>
    );
  }
  return (
    <>
      <div className="bg-blue-980 min-h-screen">
        <Nav></Nav>

        <Card textAlign={"center"} bg={"gray.900"} align={"center"}>
          logged in*
          <Image
            src={"https://http.cat/402"}
            width={500}
            height={500}
            alt="cat payment required"
          />
          <Button fontSize={"sm"} fontWeight={400} onClick={() => signOut()}>
            log out
          </Button>{" "}
          {session.user.email} <br />
          To see more. Payment is required
        </Card>
      </div>
    </>
  );
};

export default Layout;
