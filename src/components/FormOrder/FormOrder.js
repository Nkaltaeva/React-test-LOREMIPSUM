import { useState } from "react";
import "../../app.scss";
import "./formOrder.scss";

const FormOrder = () => {
  const [getValue, setValue] = useState(75);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className="form-order-background" id="order">
      <div className="form-order-blog container">
        <h2 className="form-order-title">
          Оформление <span>заказа</span>
        </h2>
        <p className="form-order-subtitle">
          Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </p>

        <div className="form-order-steps">
          <div className="form-order-circle">
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>

          <div className="form-order-step">
            <div className="form-order-step-circle">
              <i className="form-order-step-icon-search"></i>
            </div>
            <div className="form-order-step-text">
              Lorem ipsum dolor sit amet
            </div>
          </div>

          <div className="form-order-step">
            <div className="form-order-step-circle">
              <i className="form-order-step-icon-percent"></i>
            </div>
            <div className="form-order-step-text">
              Consecteturadipiscing elit
            </div>
          </div>

          <div className="form-order-step">
            <div className="form-order-step-circle">
              <i className="form-order-step-icon-file"></i>
            </div>
            <div className="form-order-step-text">Sed do eiusmod tempor</div>
          </div>

          <div className="form-order-step">
            <div className="form-order-step-circle">
              <i className="form-order-step-icon-message"></i>
            </div>
            <div className="form-order-step-text">
              Esse cillum dolore eu fugiat
            </div>
          </div>

          <div className="form-order-step">
            <div className="form-order-step-circle">
              <i className="form-order-step-icon-money"></i>
            </div>
            <div className="form-order-step-text">
              Excepteur sint occaecat cupidatat non proident
            </div>
          </div>
        </div>

        <form className="form-order" id="orderForm">
          <div className="form-order-row">
            <select className="form-order-control" required>
              <option value="sistem" disabled selected>
                Выберите тип системы
              </option>
              <option value="crm">CRM система</option>
              <option value="erp">ERP система</option>
              <option value="web">Веб-приложение</option>
              <option value="mobile">Мобильное приложение</option>
              <option value="integration">Интеграция</option>
            </select>
            <input
              type="email"
              name="email"
              className="form-order-control"
              placeholder="Ваш e-mail"
              required
            />

            <input
              type="text"
              name="name"
              className="form-order-control"
              placeholder="Ваше имя"
              required
            />
          </div>

          <div className="form-order-slider-file">
            <div className="form-order-slider">
              <div className="form-order-slider-label">
                <p>Sed ut perspiciatis, unde omnis iste natus</p>
                <p id="PercentValue">{getValue}%</p>
              </div>
              <div className="form-order-slider-wrapper">
                <div
                  className="form-order-slider-wrapper-fillup"
                  id="sliderFillup"
                  style={{ width: `${getValue}%` }}
                ></div>
                <div
                  className="form-order-slider-wrapper-percent"
                  id="sliderPercent"
                  style={{ left: `${getValue}%` }}
                ></div>
                <input
                  type="range"
                  name="volume"
                  min="0"
                  max="100"
                  value={getValue}
                  onChange={handleChange}
                  id="rangeSlider"
                />
              </div>
            </div>

            <div className="form-order-file-upload">
              <label for="fileOrderUpload" className="form-order-file-label">
                <i className="form-order-file-label-icon"></i>
                Прикрепить файл
              </label>
              <input type="file" name="file" id="fileOrderUpload" />
              <span className="form-order-file-name" id="fileDescript"></span>
            </div>
          </div>

          <button type="submit" className="form-order-file-submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormOrder;
