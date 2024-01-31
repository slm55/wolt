import "./Header.css";
import logo from "../images/wolt-logo.svg";
import Location from './Location';
import Search from './Search'

function Header() {
    return (
        <header>
          <div className="header-left">
            <img id="wolt-logo" src={logo} alt="logo"></img>
            <Location city="Astana" />
          </div>
          <div className="header-center">
            <Search text="Вольтта іздеу..." />
          </div>
          <div className="header-right">
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Sign up</button>
          </div>
      </header>
    );
};

export default Header;
