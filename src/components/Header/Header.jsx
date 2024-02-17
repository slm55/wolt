import "./Header.css";
import logo from "../images/wolt-logo.svg";
import Location from './Location';
import Search from './Search'

function Header() {
  const onLocationHover = () => {
    const locationIcon = document.querySelector('.location-left');
    locationIcon.classList.add('location-hover');
  }

  const onLocationUnHover = () => {
    const locationIcon = document.querySelector('.location-left');
    locationIcon.classList.remove('location-hover');
  }

  const onSearchActive = () => {
    const search = document.querySelector('.search');
    search.classList.add('search-active');
  }

  const onSearchInactive = () => {
    const search = document.querySelector('.search');
    search.classList.remove('search-active');
  }

    return (
        <header>
          <div className="header-left">
            <img id="wolt-logo" src={logo} alt="logo"></img>
            <Location city="Astana" onHover={onLocationHover} onUnHover={onLocationUnHover} />
          </div>
          <div className="header-center">
            <Search text="Вольтта іздеу..."/>
          </div>
          <div className="header-right">
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Sign up</button>
          </div>
      </header>
    );
};

export default Header;
