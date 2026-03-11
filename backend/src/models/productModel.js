import prisma from "../lib/prisma.js";

const productModel = {
    getAllProducts: async () => {
        try {
            const products = await prisma.product.findMany();
            return products;
        } catch (error) {
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const product = await prisma.product.findUnique({
                where: { id: Number(id) }
            });
            return product;
        } catch (error) {
            throw error;
        }
    },

    createProduct: async (data) => {
        try {
            const product = await prisma.product.create({
                data: {
                    name: data.name,
                    price: data.price
                }
            });
            return product;
        } catch (error) {
            throw error;
        }
    },

    updateProduct: async (id, data) => {
        try {
            const product = await prisma.product.update({
                where: { id: Number(id) },
                data: {
                    name: data.name,
                    price: data.price
                }
            });
            return product;
        } catch (error) {
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            const product = await prisma.product.delete({
                where: { id: Number(id) }
            });
            return product;
        } catch (error) {
            throw error;
        }
    }
};

export default productModel;