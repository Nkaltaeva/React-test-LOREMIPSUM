import React from "react";
import "../../app.scss";
import "./home.scss";

const Home = () => {
  const scrollOrder = () => {
    document.getElementById("order")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="banner-background">
      <div className="banner-content container">
        <h1 className="banner-title">
          <span>Lorem ipsum</span> dolor sit
          <br />
          ametconsectetur <span>adipiscing</span>
        </h1>

        <p className="banner-text">
          At vero eos et accusamus et iusto odio dignissimos ducimus!
        </p>

        <ul className="banner-list">
          <li>&ensp;&ndash; Totam rem aperiam eaque ipsa</li>
          <li>
            &ensp;&ndash; Sit voluptatem accusantium doloremque laudantium
          </li>
          <li>
            &ensp;&ndash; Sed ut perspiciatis, unde omnis iste natus error
          </li>
        </ul>

        <div className="banner-btn">
          <button onClick={scrollOrder} className="banner-btn-primary">
            Заказать
          </button>
          <br />
          <button onClick={scrollOrder} className="banner-btn-secondary">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
