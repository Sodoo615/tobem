import React from "react";

export default function heading() {
  return (
    <div id="wrapper">
      <div className="wrapper">
        <div id="header">
          <a href="/" id="logo">
            <h1 style={{ display: "none" }}>ТОБЭМ ХХК</h1>
          </a>
        </div>
        <div id="contact_us_in">
          <div>
            <label>Утас</label>
            <span id="phone_number">+976 7052 2225</span>
          </div>
          <div>
            <label className="left">Бидэнтэй нэгдээрэй</label>
            <div id="social">
              <a
                id="social_facebook"
                href="http://www.facebook.com/tobem.co"
                target="_blank"
              />
              <a
                id="social_twitter"
                href="http://twitter.com/TOBEMco"
                target="_blank"
              />
            </div>
          </div>
        </div>
        <div id="menu_bar">
          <ul id="main_menu">
            <li className="main-menu-list">
              <a className="main-menu-anch" href="/">
                Нүүр
              </a>
            </li>
            <li className="main-menu-list">
              <a className="main-menu-anch" href="/bidnii-tuhai">
                Бидний тухай
              </a>
              <ul className="child-menu transition">
                <li>
                  <a href="/zahirliin-mendchilgee">Захирлын мэндчилгээ</a>
                </li>
                <li>
                  <a href="/company-tuhai/">Компаний тухай</a>
                </li>
                <li>
                  <a href="/uil-ajillagaa/">Үйл ажиллагаа</a>
                </li>
                <li>
                  <a href="/udirdah-bolon-enginer-ajiltan/">
                    Удирдах болон инженер техникийн ажилтнууд{" "}
                  </a>
                </li>
                <li>
                  <a href="/ololt-amjilt/">Ололт амжилт</a>
                </li>
              </ul>
            </li>
            <li className="main-menu-list">
              <a className="main-menu-anch" href="/tosol/">
                Төсөл
              </a>
              <ul className="child-menu transition">
                <li>
                  <a href="/tosol/">Гүйцэтгэсэн төсөл</a>
                </li>
                <li>
                  <a href="/tosol/">Гүйцэтгэж буй төсөл</a>
                </li>
              </ul>
            </li>
            <li className="main-menu-list">
              <a className="main-menu-anch" href="/medee-medeelel/">
                Мэдээ, мэдээлэл
              </a>
            </li>
            <li className="main-menu-list">
              <a
                className="main-menu-anch"
                href="/%D1%85%D0%BE%D0%BB%D0%B1%D0%BE%D0%BE-%D0%B1%D0%B0%D1%80%D0%B8%D1%85/"
              >
                Холбоо барих
              </a>
            </li>
          </ul>
          <div id="contact_us"></div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
}
