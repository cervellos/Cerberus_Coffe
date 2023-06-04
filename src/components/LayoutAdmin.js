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
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-980 min-h-screen flex">
      <Nav></Nav>
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 text-blue-900">
        <Image
          src={"https://http.cat/402"}
          width={500}
          height={500}
          alt="cat payment required"
        />
        {session.user.email}. To see more. Payment is required.
        <br />
        <Button
          fontSize={"sm"}
          fontWeight={400}
          onClick={() => signOut()}
          bgColor={"gray.300"}
        >
          log out
        </Button>{" "}
      </div>
    </div>
  );
}
