import React from "react";
import { Card } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        cover={<img alt={product.title} src={product.image} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
        ]}
        title={product.title}
        hoverable
        style={{
          width: 200,
          height: 200,
          marginLeft: "5px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
        }} // Sabit genişlik ve yükseklik
      >
        <Meta title={product.title} description={`$${product.price}`} />
      </Card>
    </Link>
  );
};

export default ProductCard;
