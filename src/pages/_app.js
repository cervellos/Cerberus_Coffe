import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../resorce/theme";
import Layout from "@/components/layout";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ChakraProvider>
  );
}
