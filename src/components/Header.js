import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Button } from "antd";

const Header = () => {
  const isLoggedIn = false; // Örnek durum
  const navigate = useNavigate();

  const logoutHandler = () => {
    // 1. Kullanıcı oturum bilgilerini temizle
    localStorage.removeItem("token"); // Token ya da oturum bilgisi temizleniyor
    localStorage.removeItem("user");

    // 2. Kullanıcıyı giriş sayfasına yönlendir
    navigate("/login");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "#001529",
      }}
    >
      {/* Sol Menü */}
      <Menu mode="horizontal" theme="dark" style={{ flex: 1 }}>
        <Menu.Item key="home">
          <Link to="/">Anasayfa</Link>
        </Menu.Item>
        <Menu.Item key="products">
          <Link to="/products">Ürünler</Link>
        </Menu.Item>
        <Menu.Item key="categories">
          <Link to="/categories">Kategoriler</Link>
        </Menu.Item>
      </Menu>

      {/* Sağ Butonlar */}
      <div style={{ display: "flex", gap: "10px" }}>
        {isLoggedIn ? (
          <>
            <Link to="/profile">
              <Button type="primary">Profil</Button>
            </Link>
            <Button type="default" onClick={logoutHandler}>
              Çıkış
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button type="primary">Giriş</Button>
            </Link>
            <Link to="/register">
              <Button>Kayıt Ol</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
