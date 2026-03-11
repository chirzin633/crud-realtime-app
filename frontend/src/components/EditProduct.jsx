import { useParams } from "react-router";
import { useProductForm } from "../hooks/useProductForm.js";
import ProductForm from "./ProductForm.jsx";

export default function EditProduct() {
  const { id } = useParams();
  const { name, setName, price, setPrice, loading, errors, saveProduct } = useProductForm(id);

  return <ProductForm name={name} setName={setName} price={price} setPrice={setPrice} loading={loading} errors={errors} onSubmit={saveProduct} buttonText="Update" />;
}
