import React, { useState } from "react";
import "./heder.scss";
import "../../app.scss";
import Home from "../Home/Home";

const Heder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeMenu = () => {
    if (window.innerWidth >= 900) {
      return;
    }
    setIsMenuOpen((prev) => !prev);
  };

  const scrollOrder = () => {
    document.getElementById("order")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <nav className="header-nav container">
        <a className="header-nav-logo" href={<Home />} target="_self">
          LOREMIPSUM.<span>NET</span>
        </a>
        <p className="header-mobile-menu" onClick={changeMenu}></p>
        <ul
          className={`header-nav-menu ${isMenuOpen ? "menu-open" : ""}`}
          onClick={changeMenu}
        >
          <li className="header-nav-menu-li">
            <p className="header-nav-menu-li-business">Бизнес</p>
          </li>
          <li className="header-nav-menu-li">
            <p className="header-nav-menu-li-about">О нас</p>
          </li>
          <li className="header-nav-menu-li">
            <p className="header-nav-menu-li-price" onClick={scrollOrder}>
              Цены
            </p>
          </li>
          <li className="header-nav-menu-li">
            <p className="header-nav-menu-li-order" onClick={scrollOrder}>
              Оформить заказ
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Heder;
