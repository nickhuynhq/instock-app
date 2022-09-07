import "./Header.scss";
import InstockLogo from "../../assets/logo/Instock-Logo_2x.png";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={InstockLogo} alt="instock-logo" />
        <div className="header__buttons">
          <button className="header__btn-warehouses">Warehouses</button>
          <button className="header__btn-inventory">Inventory</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
