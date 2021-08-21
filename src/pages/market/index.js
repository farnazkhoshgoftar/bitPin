import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./market.css";
import Hoc from "../../components/hoc";
import Card from "./../../components/card/";
import MyPagination from "./pagination";
import loading from "../../assets/imgs/Rhombus.gif";

const Market = () => {
  const marketList = useSelector((state) => state.market);

  const [pageSize] = useState(10);
  const { pageNumber } = useParams();
  const indexOfLastMarket = pageNumber * pageSize;
  const indexOfFirstMarket = indexOfLastMarket - pageSize;
  const currentMarketList = marketList.slice(
    indexOfFirstMarket,
    indexOfLastMarket
  );

  return (
    <Hoc>
      <ul>
        {currentMarketList.length !== 0 ? (
          currentMarketList.map((item) => <Card key={item.id} info={item} />)
        ) : (
          <div className="loading">
            <img src={loading} alt="loading..." />
          </div>
        )}
      </ul>
      <MyPagination />
    </Hoc>
  );
};

export default Market;
