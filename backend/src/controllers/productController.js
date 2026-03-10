import prisma from "../lib/prisma.js";

const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        const response = products.map((product) => {
            const { createdAt, ...productData } = product;
            return {
                ...productData,
                createdAt: new Date(createdAt).toLocaleString('id-ID')
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(({
            msg: error.message
        }));
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await prisma.product.findUnique({
            where: { id: Number(id) }
        });

        if (!product) {
            return res.status(404).json({ msg: "Product not found" })
        }

        const { createdAt, ...productData } = product;
        const response = {
            ...productData,
            createdAt: new Date(createdAt).toLocaleString('id-ID')
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const createProduct = async (req, res) => {
    const { name, price } = req.body;

    try {
        const product = await prisma.product.create({
            data: { name, price }
        });

        // 1. Ambil createdAt keluar dari object, sisanya simpan di 'productData'
        const { createdAt, ...productData } = product;

        const response = {
            ...productData,
            createdAt: new Date(createdAt).toLocaleString('id-ID')
        };
        res.status(201).json({
            msg: "Create product success.",
            data: response
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;

        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: { name, price }
        });

        const { createdAt, ...productData } = product;

        const response = {
            ...productData,
            createdAt: new Date(createdAt).toLocaleString('id-ID')
        };

        res.status(200).json({
            msg: "Update product success.",
            data: response
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.product.delete({
            where: { id: Number(id) }
        });

        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export default { getProducts, getProductById, createProduct, updateProduct, deleteProduct };