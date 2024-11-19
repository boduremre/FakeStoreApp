import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/api.js";
import { Card, Table } from "antd";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // API'den kategorileri çek
    getCategories().then((response) => {
      const categoryData = response.data.map((category, index) => ({
        key: index + 1, // Ant Design tablosu için benzersiz bir key
        name: category,
      }));

      setCategories(categoryData);
    });
  }, []);

  // Tablo sütun tanımları
  const columns = [
    {
      title: "ID",
      dataIndex: "key", // categoryData'daki "key" alanı
      key: "id",
    },
    {
      title: "Kategori Adı",
      dataIndex: "name", // categoryData'daki "name" alanı
      key: "name",
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <Card title="Kategoriler" className="custom-card">
        <Table columns={columns} dataSource={categories} />
      </Card>
    </div>
  );
};

export default Categories;
