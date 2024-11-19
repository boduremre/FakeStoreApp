import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { Card } from "antd";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <p>Yükleniyor...</p>;

  return (
    <Card
      title={product.title}
      cover={
        <img
          alt={product.title}
          src={product.image}
          className="product-image"
        />
      }
      style={{ margin: "20px" }}
    >
      <p>{product.description}</p>
      <p>Fiyat: {product.price}₺</p>
    </Card>
  );
};

export default ProductDetails;
