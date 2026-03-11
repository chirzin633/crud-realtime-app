import { Link } from "react-router";
import { useProduct } from "../hooks/useProduct.js";
import { formatCurrency } from "../utils/formatters.js";
import ProductTable from "./ProductTable.jsx";

export default function ProductList() {
  const { products, isLoading, error, deleteProduct } = useProduct();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <Link to="/add" className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
          Add New
        </Link>
        <ProductTable products={products} onDelete={deleteProduct} formatCurrency={formatCurrency} />
      </div>
    </div>
  );
}
