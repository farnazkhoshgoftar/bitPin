import React from "react";
import { useDispatch } from "react-redux";

import "./card.css";
import { changeFavorite } from "../../redux/market/action/";

const Card = ({ info }) => {

  const dispatch = useDispatch();

  const favoriteMarket = (id, isFavorite) => {
    dispatch(changeFavorite(id, isFavorite));
  };

  return (
    <div key={info.id} className="myRow">
      <div className="introduction section">
        <img src={info.currency1.image} alt="img" />
        <div>
          <p>{info.currency1.code}</p>
          <p className="titleFa">{info.currency1.title_fa}</p>
        </div>
      </div>
      <div className="section">
        <p>{info.price.toLocaleString()}</p>
      </div>
      <div className="change section ">
        <p className={info.price_info.change < 0 ? "red" : "green"}>
          {info.price_info.change}%
        </p>
      </div>
      <div
        className="section"
        onClick={() => favoriteMarket(info.id, info.isFavorite)}
      >
        {info.isFavorite ? (
          <img
            src="https://img.icons8.com/fluent/40/000000/star.png"
            alt="add to favs"
          />
        ) : (
          <img
            src="https://img.icons8.com/color/40/000000/star--v1.png"
            alt="remove from favs"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
