import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.css";
import { ReactComponent as Favorite } from "../../assets/imgs/favorite.svg";

const Header = () => {
  const marketList = useSelector((state) => state.market);

  let favoriteCounter = marketList.filter((item) => {
    if (item.isFavorite === true) {
      return item;
    }
  });

  return (
    <header className="header">
      <div className="headerContent">
        <NavLink activeClassName="selected" to="/pages/1">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/favorites">
          favorite
        </NavLink>
        <div className="heartICon">
          <Favorite height="40px" width="50px" />
          <span>{favoriteCounter.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
