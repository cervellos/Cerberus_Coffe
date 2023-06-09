import LayoutAdmin from "@/components/LayoutAdmin";

export default function NewProduct() {
  return (
    <LayoutAdmin>
      <h1>New Product</h1>
      <label>Product name</label>
      <input type="text" placeholder="product name"></input>
      <label>descripction</label>
      <textarea placeholder="descripction"></textarea>
      <label>Price (AR$)</label>
      <input type="number" placeholder="price"></input>
    </LayoutAdmin>
  );
}
