import React from "react";
import Header from "../Header/Header";

import "./HeaderNav.css";

export default function HeaderNav() {
  return (
    <div className="container-bg">
      <Header />
      <p fluid className="text-center">
        <h1>Я Бурназова Юлия Сергеевна</h1>
        <h2>Добро пожаловать</h2>
      </p>
    </div>
  );
}
