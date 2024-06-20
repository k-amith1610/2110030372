import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, companyName, categoryName }) => {
    return (
        <Link to={`/product/${product.productName}`} state={{ product, companyName, categoryName }}>
            <div className="border border-gray-300 border-x-8 border-y-8 rounded-lg shadow-lg p-4 m-2 bg-white hover:shadow-xl transition-shadow duration-300">
                <h1 className="text-lg font-semibold mb-2">Product Name: {product.productName}</h1>
                <p className="text-gray-700 mb-1">Company: {companyName}</p>
                <p className="text-gray-700 mb-1">Category: {categoryName}</p>
                <p className="text-gray-700 mb-1">Price: ${product.price}</p>
                <p className="text-gray-700 mb-1">Rating: {product.rating}</p>
                <p className="text-gray-700 mb-1">Discount: {product.discount}%</p>
                <p className="text-gray-700">Availability: {product.availability}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
