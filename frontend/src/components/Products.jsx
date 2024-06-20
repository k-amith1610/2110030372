import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Products = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4ODY3NTk1LCJpYXQiOjE3MTg4NjcyOTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM0Y2NhYjQ3LTc2YjMtNDNiYy1iZDk1LTAzNTg4YTZiM2E5NiIsInN1YiI6IjIxMTAwMzAzNzJAa2xoLmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6IktMIFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6ImM0Y2NhYjQ3LTc2YjMtNDNiYy1iZDk1LTAzNTg4YTZiM2E5NiIsImNsaWVudFNlY3JldCI6IkxDT0VEdGZqSlFLWmVrbEEiLCJvd25lck5hbWUiOiJLIEFNSVRIIiwib3duZXJFbWFpbCI6IjIxMTAwMzAzNzJAa2xoLmVkdS5pbiIsInJvbGxObyI6IjIxMTAwMzAzNzIifQ.ssrBf04ShCvW7okIOHNqKawu7YSVkEbBwHW0mvli5cw"

    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let allProducts = [];

                for (let company of companies) {
                    for (let category of categories) {
                        const res = await axios.get(
                            `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=1&maxPrice=10000`,
                            {
                                headers: { Authorization: `Bearer ${token}` },
                            }
                        );
                        const productsWithDetails = res.data.map(product => ({
                            ...product,
                            companyName: company,
                            categoryName: category
                        }));
                        allProducts = [...allProducts, ...productsWithDetails];
                    }
                }

                setProducts(allProducts);
            } catch (error) {
                setError(error);
                console.error('Error fetching products:', error);
            }
        };

        fetchAllProducts();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-slate-800 h-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 p-3 text-center"><span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 text-transparent bg-clip-text">All Products</span></h1>
            {error && <p className="text-red-500">Error fetching products: {error.message}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} companyName={product.companyName} categoryName={product.categoryName} />
                ))}
            </div>
        </div>
    );
};

export default Products;
