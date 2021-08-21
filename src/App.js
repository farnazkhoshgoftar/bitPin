import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Routes from "./routes/";
import { getMarket, resetMarketList } from "../src/redux/market/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarket());
    return () => {
      dispatch(resetMarketList());
    };
  }, []);

  return <Routes />;
}

export default App;
