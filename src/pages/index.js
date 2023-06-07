import Products from "@/components/Products";
import Bundle from "@/components/Bundle";
import { useColorModeValue } from "@chakra-ui/react";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <LayoutAdmin>
        <div className="text-blue-900 flex justify-between">
          <h2>
            hello, <b>{session?.user?.name}</b>
          </h2>
          <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            <img src={session?.user?.image} alt="user" className="w-8 h-8" />
            <span className="px-2">{session?.user?.name}</span>
          </div>
        </div>
      </LayoutAdmin>
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
