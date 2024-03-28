import React from "react";
import { Link } from "react-router-dom";
import SingleProductPage from "../pages/SingleProductPage";

function ProductCard({ product }) {
  return (
    <div className="mx-auto h-80 w-72 border-2 border-slate-500 rounded-2xl shadow-xl">
      <img
        className="h-36 w-72 rounded-2xl object-cover shadow-xl"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="text-center text-xs p-3">
        <div className="text-stone-500 text-sm">
          <p>{product.title}</p>
          <p>Price: ${product.price}</p>
          <br />
        </div>
        <Link
          className="text-blue-400 hover:text-red-600 text-sm"
          to={`/single/${product.id}`}
        >
          Show more
        </Link>
        <p>Product in stock: {product.stock} pieces</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
