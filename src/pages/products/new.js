import LayoutAdmin from "@/components/LayoutAdmin";

export default function NewProduct() {
  return (
    <LayoutAdmin>
      <h1 className="text-blue-900 mb-2">New Product</h1>
      <input type="text" placeholder="product name"></input>
      <textarea placeholder="descripcion"></textarea>
    </LayoutAdmin>
  );
}
