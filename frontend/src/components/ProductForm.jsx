export default function ProductForm({ name, setName, price, setPrice, loading, onSubmit, buttonText, errors = {} }) {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={onSubmit} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Product Name</label>
            <input
              type="text"
              className={`w-full py-3 mt-1 border rounded-lg px-3 focus:outline-none hover:shadow ${errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-slate-500"}`}
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Price</label>
            <input
              type="text"
              className={`w-full py-3 mt-1 border rounded-lg px-3 focus:outline-none hover:shadow ${errors.price ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-slate-500"}`}
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={loading}
            />

            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
          </div>
          <button type="submit" className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 hover:shadow" disabled={loading}>
            {loading ? "Loading..." : buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
