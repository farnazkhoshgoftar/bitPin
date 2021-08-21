import {
  GET_MARKET,
  CHANGE_FAVORITE,
  RESET_MARKET_LIST,
} from "../action/types";

export const market = (state = [], action) => {
  switch (action.type) {
    case GET_MARKET:
      return [...state,...action.payload].map((item) => {
        return {
          ...item,
          isFavorite: false,
        };
      });

    case CHANGE_FAVORITE:
      return state.map((item) => {
        if (action.payload.id === item.id) {
          return {
            ...item,
            isFavorite: !action.payload.isFavorite,
          };
        } else {
          return item;
        }
      });

    case RESET_MARKET_LIST:
      return [];

    default:
      return state;
  }
};
