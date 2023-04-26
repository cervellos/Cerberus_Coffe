import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../resorce/theme";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
