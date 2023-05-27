import Products from "@/components/Products";
import Bundle from "@/components/Bundle";
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24"
        background={useColorModeValue("white", "black")}
      >
        <Bundle></Bundle>
        <Products></Products>
      </main>
    </>
  );
}
