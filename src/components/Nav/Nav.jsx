import { useState } from "react";
import CableIcon from '@mui/icons-material/Cable';
import DiamondIcon from '@mui/icons-material/Diamond';
import ManIcon from '@mui/icons-material/Man';
import GirlIcon from '@mui/icons-material/Girl';
import NavButton from "./NavButton";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();

  const [buttons, setButtons] = useState( [
    { title: "All Products", icon: null, isActive: true, path: "" },
    { title: "Electronics", icon: <CableIcon />, isActive: false, path: "electronics" },
    { title: "Jewelery", icon: <DiamondIcon />, isActive: false, path: "jewelery"},
    { title: "Men's Clothing", icon: <ManIcon /> , isActive: false, path: "men's clothing"},
    { title: "Women's Clothing", icon: <GirlIcon />, isActive: false, path: "women's clothing"}
  ]);

  const onClick = (id) => {
    const updatedButtons = buttons.map((button, index) => {
      index == id ? button.isActive = true : button.isActive = false;
      return button;
    });
    setButtons(updatedButtons);
    const path = buttons.find((button, index) => index == id).path;
    navigate(`/products/${encodeURIComponent(path)}`);
  };

  return (
    <nav className="main-nav">
      <div className="nav-btns-container">
      {buttons.map((button, index) => {
        return (
          <NavButton
            key={index}
            title={button.title}
            icon={button.icon}
            isActive={button.isActive}
            onClick={() => onClick(index)}
          />);
      })}
      </div>
    </nav>
  );
}

export default Nav;
