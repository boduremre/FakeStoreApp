import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="product-list-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
