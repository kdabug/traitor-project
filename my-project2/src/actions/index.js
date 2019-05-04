//example action
import {
  APP_INITIAL_DATA_FETCH,
  APP_UPDATE_NAME_AND_VALUE,
  APP_RESET_USER_INPUT,
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
export const appUpdateNameAndValue = (name, value) => {
  return { type: APP_UPDATE_NAME_AND_VALUE, payload: { [name]: value } };
};
//appResetUserInput
export const appResetUserInput = () => {
  return { type: APP_RESET_USER_INPUT, payload: { userInput: "" } };
};
// COMPASS ACTIONS
export const compassUpdateTickerSymbol = () => {
  return (dispatch, getState) => {
    console.log("COMPASS UPDATE TICKER STATE: ", getState().appReducer);
    const { userInput, stockInfo } = getState().appReducer;
    const ticker = getTickerIndex(stockInfo, userInput);
    console.log("action compass ticker", ticker);
    return Promise.all([
      dispatch({ type: COMPASS_UPDATE_TICKER, payload: { ticker } }),
      dispatch(appResetUserInput())
    ]);
  };
  // this.setState((prevState, newState) => ({
  //   ticker: newTicker,
  //   userInput: ""
  // }));
  // this.props.history.push(`/compass/${this.props.appReducer.newTicker}`);
};
