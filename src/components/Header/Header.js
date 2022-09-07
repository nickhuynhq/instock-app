import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo_2x.png";

function Header() {
  return (
    <header>
      <nav className="header">
        <img className="header__logo" src={logo} alt="instock-logo" />
        <div className="header__buttons">
          <button className="header__btn-warehouses">Warehouses</button>
          <button className="header__btn-inventory">Inventory</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
