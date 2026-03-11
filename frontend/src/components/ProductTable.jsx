import { Link } from "react-router";

export default function ProductTable({ products, onDelete, formatCurrency }) {
  return (
    <div className="relative shadow rounded-lg mt-3">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="py-3 px-1 text-center">No</th>
            <th className="py-3 px-6">Product Name</th>
            <th className="py-3 px-6">Price</th>
            <th className="py-3 px-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr className="bg-white border-b" key={product.id}>
              <td className="py-3 px-1 text-center">{index + 1}</td>
              <td className="py-3 px-6 font-medium text-gray-900">{product.name}</td>
              <td className="py-3 px-6">{formatCurrency(product.price)}</td>
              <td className="py-3 px-1 text-center">
                <Link to={`/edit/${product.id}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">
                  Edit
                </Link>
                <button onClick={() => onDelete(product.id)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
