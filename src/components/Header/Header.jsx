import "./Header.scss";
import logo from "../../../public/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head">
      <div className="head-inner">
        <div className="head-assets">
          <div className="head-logo">
            <img id="header__logo" src={logo} alt="" />
            <p id="eatly">eatly</p>
          </div>
          <nav>
            <Link to="#">Menu</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Contact</Link>
          </nav>
        </div>

        <div className="head-reg">
          <button id="login">
            <Link to="#">Login</Link>
          </button>
          <button id="sign" href="#">
            <Link to="#">Sign in</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
