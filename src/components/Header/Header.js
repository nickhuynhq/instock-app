import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo_2x.png";

function Header() {
  return (
    <header>
      <nav className="header">
        <a href="/">
          <img className="header__logo" src={logo} alt="instock-logo" />
        </a>
        <div className="header__buttons">
          <a href="/warehouses" className="header__btn">
            Warehouses
          </a>
          <a href="/inventory" className="header__btn">
            Inventory
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
