import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const { product, companyName, categoryName } = location.state;

    return (
        <div className="container mx-auto p-4 h-screen">
            <div className="p-3">
                <Link to="/" className="btn border-red-500 hover:border-green-500 border p-2 rounded-lg bg-gray-700 text-white border-x-4 border-y-2">BACK</Link>  
            </div>
            <h1 className="text-3xl font-bold mb-4 mt-4 text-white p-4 "><span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 text-transparent bg-clip-text">Product Details</span></h1>
            <div className="border border-gray-300 border-x-8 border-y-8 rounded-lg shadow-lg p-4 m-2 bg-white hover:shadow-xl transition-shadow duration-300">
                <h1 className="text-lg font-semibold mb-2">Product Name: {product.productName}</h1>
                <p className="text-gray-700 mb-1">Company: {companyName}</p>
                <p className="text-gray-700 mb-1">Category: {categoryName}</p>
                <p className="text-gray-700 mb-1">Price: ${product.price}</p>
                <p className="text-gray-700 mb-1">Rating: {product.rating}</p>
                <p className="text-gray-700 mb-1">Discount: {product.discount}%</p>
                <p className="text-gray-700">Availability: {product.availability}</p>
                <p className="text-gray-700">Description: {product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
