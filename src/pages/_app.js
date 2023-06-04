import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../resorce/theme";
import Layout from "@/components/layout";
import { SessionProvider } from "next-auth/react";
import LayoutAdmin from "@/components/LayoutAdmin";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <LayoutAdmin>
          <Component {...pageProps} />
        </LayoutAdmin>
      </SessionProvider>
    </ChakraProvider>
  );
}
