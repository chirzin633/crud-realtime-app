import ProductForm from "./ProductForm";
import { useProductForm } from "../hooks/useProductForm.js";

export default function AddProduct() {
  const { name, setName, price, setPrice, loading, errors, saveProduct } = useProductForm();

  return <ProductForm name={name} setName={setName} price={price} setPrice={setPrice} loading={loading} errors={errors} onSubmit={saveProduct} buttonText="Save" />;
}
