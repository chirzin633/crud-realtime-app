import useSWR, { useSWRConfig } from "swr";
import productService from "../services/productService.js";

export function useProduct() {
    const { mutate } = useSWRConfig();
    const { data, error, isLoading } = useSWR(
        "products",
        productService.getAllProducts
    );

    const deleteProduct = async (productId) => {
        try {
            await productService.deleteProduct(productId);
            mutate("products");
        } catch (error) {
            console.error("Error deleting product: ", error);
            alert("Gagal menghapus produk. Silakan coba lagi.");
        }
    };

    return {
        products: data || [],
        isLoading,
        error,
        deleteProduct
    };
}