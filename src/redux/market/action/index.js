import { GET_MARKET, CHANGE_FAVORITE, RESET_MARKET_LIST } from "./types";
import { request } from "../../../utils/api";

export const getMarket = () => {
  return async (dispatch) => {
    request.get("/").then((response) => {
      dispatch({ type: GET_MARKET, payload: response.results });
    });
  };
};

export const changeFavorite = (id, isFavorite) => ({
  type: CHANGE_FAVORITE,
  payload: {
    id,
    isFavorite,
  },
});

export const resetMarketList = () => ({
  type: RESET_MARKET_LIST,
  payload: {},
});
