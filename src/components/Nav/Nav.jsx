import { useState } from "react";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StoreIcon from "@mui/icons-material/Store";
import NavButton from "./NavButton";
import "./Nav.css";
function Nav() {
  const [buttons, setButtons] = useState( [
    { title: "Discovery", icon: <LocationCityOutlinedIcon />, isActive: true },
    { title: "Restaurants", icon: <RestaurantIcon />, isActive: false },
    { title: "Stores", icon: <StoreIcon />, isActive: false },
  ]);

  const onClick = (id) => {
    const updatedButtons = buttons.map((button, index) => {
      index == id ? button.isActive = true : button.isActive = false;
      return button;
    });
    setButtons(updatedButtons);
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
