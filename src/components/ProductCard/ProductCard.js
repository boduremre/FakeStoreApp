import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        cover={<img alt={product.title} src={product.image} />}
        hoverable
        style={{
          width: 240,
          height: "auto",
          marginLeft: "5px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
        }} // Sabit genişlik ve yükseklik
      >
        <Meta title={product.title} description={`${product.price}₺`} />
      </Card>
    </Link>
  );
};

export default ProductCard;
