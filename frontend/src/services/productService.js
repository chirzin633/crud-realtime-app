import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const productService = {
    getAllProducts: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    getProductById: async (id) => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },

    createProduct: async (productData) => {
        const response = await axios.post(API_URL, {
            name: productData.name,
            price: Number(productData.price)
        });
        return response.data;
    },

    updateProduct: async (id, productData) => {
        const response = await axios.patch(`${API_URL}/${id}`, {
            name: productData.name,
            price: Number(productData.price)
        });
        return response.data;
    },

    deleteProduct: async (id) => {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    }
}
export default productService;