import Products from "@/components/Products";
import Bundle from "@/components/Bundle";
import { useColorModeValue } from "@chakra-ui/react";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Home() {
  return (
    <>
      <LayoutAdmin>test</LayoutAdmin>
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24"
        background={useColorModeValue("white", "black")}
      >
        <Products></Products>
        <Bundle></Bundle>
      </main>
    </>
  );
}
