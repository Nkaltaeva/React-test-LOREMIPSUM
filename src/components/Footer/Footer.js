import React from "react";
import "../../app.scss";
import "./footer.scss";
import qiwiWallet from "../../img/icon/icon_footer/qiwi_wallet.svg";
import yandexMoney from "../../img/icon/icon_footer/yandex_money.svg";
import webMoney from "../../img/icon/icon_footer/web_money.svg";
import email from "../../img/icon/icon_footer/email.svg";
import vk from "../../img/icon/icon_footer/vk.svg";

const Footer = () => {
  const Payments = [
    { img: qiwiWallet, txt: "Qiwi wallet", link: "/" },
    { img: yandexMoney, txt: "Yandex Money", link: "/" },
    { img: webMoney, txt: "Web Money", link: "/" },
  ];
  const Contacts = [
    { img: email, txt: "info@ipsum228.com", link: "/" },
    { img: vk, txt: "Мы вконтакте", link: "/" },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-сopyright">
            © 2018 LOREMIPSUM.NET Все права защищены.
          </div>
          <hr />
          <div className="footer-payments">
            {Payments.map(({ img, txt, link }) => (
              <>
                <a
                  className="footer-payments-link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="footer-icon" src={img} alt={txt} />
                  <span>{txt}</span>
                </a>
              </>
            ))}
          </div>
          <hr />
          <div className="footer-contacts">
            {Contacts.map(({ img, txt, link }) => (
              <>
                <a
                  className="footer-contact-link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="footer-icon" src={img} alt={txt} />
                  <span>{txt}</span>
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
