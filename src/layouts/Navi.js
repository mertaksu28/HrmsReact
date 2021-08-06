import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <Container>
      <div>
        <Menu>
          <Menu.Item name="Anasayfa" as={NavLink} to="/">Anasayfa</Menu.Item>
          <Menu.Item name="Anasayfa" as={NavLink} to="/is-ilanlari">
            İş ilanları
          </Menu.Item>
          <Menu.Item name="Anasayfa" as={NavLink} to="/employerlist">İş verenler</Menu.Item>
          <Menu.Item name="Anasayfa" as={NavLink} to="/employeelist">İş arayanlar</Menu.Item>
          <Menu.Item name="Anasayfa" as={NavLink} to="/yeni-is-ilani">Yeni iş ilanı</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="Giriş Yap">Giriş Yap</Menu.Item>
            <Menu.Item name="Çıkış Yap">Çıkış Yap</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </Container>
  );
}
