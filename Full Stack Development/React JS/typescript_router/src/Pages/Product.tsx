import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const PRODUCTS = [
    { id: "p1", title: "Product-1" },
    { id: "p2", title: "Product-2" },
    { id: "p3", title: "Product-3" },
  ];
  return (
    <>
      <h1>Product</h1>

      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Product;
