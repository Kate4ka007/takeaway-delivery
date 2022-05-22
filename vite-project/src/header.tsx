/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import "./header.css";
import Logo from "./assets/image/Logo.png";
import trash from "./assets/image/trash.png";

export function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__text">
          <div className="header__div">
            We're open and available for takeaway & delivery.
          </div>
          <div className="header__div">
            <a className="header__link" href="##">
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__logo">
          <img src={Logo} alt="" />{" "}
        </div>

        <nav className="header__nav">
          <ul className="nav__items">
            <li className="item">
              <a className="nav_link" href="#">
                Home
              </a>
            </li>
            <li className="item">
              <a className="nav_link" href="#">
                Order
              </a>
            </li>
            <li className="item">
              <a className="nav_link" href="#">
                Company
              </a>
            </li>
            <li className="item">
              <a className="nav_link" href="#">
                FAQ
              </a>
            </li>
            <li className="item">
              <a className="nav_link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__trash">
          <img className="trash" src={trash} alt="" />
        </div>
      </div>
    </header>
  );
}
