import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo_2x.png";
import { useEffect, useState } from "react";

function Header() {

  const [active, setActive] = useState(null);

  useEffect(()=>{
    if(window.location.pathname.includes("inventory")){
      setActive("inventory");
    } else{
      setActive("warehouses");
    }
  }, [])

  const handleActive = (item) => {
    setActive(item);
  }

  return (
    <header>
      <nav className="header">
        <a href="/">
          <img className="header__logo" src={logo} alt="instock-logo" />
        </a>
        <div className="header__buttons">
          <a href="/warehouses" className={active === "warehouses" ? "header__btn header__btn--active" : "header__btn"} onClick={handleActive}>
            Warehouses
          </a>
          <a href="/inventory" className={active === "inventory" ? "header__btn header__btn--active" : "header__btn"} onClick={handleActive}>
            Inventory
          </a>
        </div>
      </nav>
    </header>
  );
}
 
export default Header;
