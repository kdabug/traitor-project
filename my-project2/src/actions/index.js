//example action
import {
  APP_INITIAL_DATA_FETCH,
  COMPASS_UPDATE_TICKER
} from "../constants/actionTypes";
import { fetchStockSymbols, fetchStockLists } from "../services/stocks";
import { getTickerIndex } from "../utilities";
// APP ACTIONS
export const appInitialDataFetch = (listSelect = "mostActive") => {
  return async dispatch => {
    const stockInfo = await fetchStockSymbols();
    const tickerSymbols = stockInfo.map(stock => stock.symbol);
    const companyNames = stockInfo.map(stock => stock.name);
    const newList = await fetchStockLists(listSelect);
    const payload = {
      stockInfo: stockInfo,
      autocompleteOptions: [...tickerSymbols, ...companyNames],
      formQuery: "",
      stockList: newList
    };
    return dispatch({ type: APP_INITIAL_DATA_FETCH, payload });
  };
};

//appUpdateNameAndValue
//appResetUserInput

// COMPASS ACTIONS
export const compassUpdateTickerSymbol = (tickerInfo, push = null) => {
  this.setState((prevState, newState) => ({
    ticker: newTicker,
    userInput: ""
  }));
  this.props.history.push(`/compass/${this.props.appReducer.newTicker}`);
};
