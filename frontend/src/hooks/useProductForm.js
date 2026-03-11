import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import productService from "../services/productService.js";

export function useProductForm(id = null) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    const product = await productService.getProductById(id);
                    setName(product.name);
                    setPrice(product.price.toString());
                } catch (error) {
                    console.error("Error fetching product: ", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id]);

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Product name is required.";
        }

        if (!price.toString().trim()) {
            newErrors.price = "Price is required."
        } else if (isNaN(Number(price)) || Number(price < 0)) {
            newErrors.price = "Price must be a valid positive number."
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        try {
            if (id) {
                await productService.updateProduct(id, { name, price });
            } else {
                await productService.createProduct({ name, price });
            }
            navigate("/");
        } catch (error) {
            console.error("Error saving product: ", error);
        } finally {
            setLoading(false);
        }
    }

    return {
        name,
        setName,
        price,
        setPrice,
        loading,
        errors,
        saveProduct
    };
}