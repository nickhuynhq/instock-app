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
          <a href="/warehouses">
            <button className="header__btn">Warehouses</button>
          </a>
          <a href="/inventory">
            <button className="header__btn">Inventory</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
