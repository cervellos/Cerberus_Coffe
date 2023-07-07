import LayoutAdmin from "@/components/LayoutAdmin";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [descripction, setDescripction] = useState("");
  const [price, setPrice] = useState("");
  function createProduct(ev) {
    ev.preventDefault();
    const data = { title, descripction, price };
    axios.post("/api/products", data);
  }
  return (
    <LayoutAdmin>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <label>descripction</label>
        <textarea
          placeholder="descripction"
          value={descripction}
          onChange={(ev) => setDescripction(ev.target.value)}
        ></textarea>
        <label>Price (AR$)</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </LayoutAdmin>
  );
}
