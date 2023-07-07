import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./nav";
import { Image, Button } from "@chakra-ui/react";

export default function LayoutAdmin({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn()}
            className="bg-white text-blue-900 p-2 px-4 rounded-lg"
          >
            Login
          </button>
          <br />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-980 min-h-screen flex">
      <Nav></Nav>
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 text-blue-900">
        {children}
        <br></br>
      </div>
    </div>
  );
}
