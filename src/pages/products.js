import LayoutAdmin from "@/components/LayoutAdmin";
import Link from "next/link";

export default function Products() {
  return (
    <LayoutAdmin>
      <Link
        className="bg-blue-900 text-white rounded-md py-1 px-2"
        href={"./products/new"}
      >
        Add new product Here
      </Link>
    </LayoutAdmin>
  );
}
