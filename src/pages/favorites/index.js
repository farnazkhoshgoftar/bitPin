import React from "react";
import { useSelector } from "react-redux";

import './favorites.css'
import Hoc from "../../components/hoc/";
import Card from "../../components/card/";

const Favorites = () => {
  const marketList = useSelector((state) => state.market);

  const filterMarketList = marketList.filter(
    (item) => item.isFavorite === true
  );

  return (
    <Hoc>
      <ul>
        {filterMarketList.length !== 0 ? (
          filterMarketList.map((item) => <Card info={item} key={item.id} />)
        ) : (
          <div className='message'>
            <p>there is not favorite</p>
          </div>
        )}
      </ul>
    </Hoc>
  );
};

export default Favorites;
