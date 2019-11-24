//example action
import {
  APP_INITIAL_DATA_FETCH,
  APP_UPDATE_NAME_AND_VALUE,
  APP_RESET_USER_INPUT,
  USER_LOGIN,
  USER_LOGOUT,
  USER_EDIT,
  USER_REGISTER,
  QUERY_BAR_FILTER_OPTIONS,
  QUERY_BAR_UPDATE_TICKER,
  QUERY_BAR_REMOVE_OPTIONS,
  CHEST_INITIAL_DATA_FETCH,
  STOCK_DETAIL_FETCH_TICKER_INFO,
  PLANK_FETCH_TICKER_LIST,
  STOCK_DETAIL_TOGGLE_SHOW_PEERS,
  COMPASS_HISTORY_DATA_FETCH
} from "../constants/actionTypes";
import {
  fetchTickerPrice,
  fetchCompanyInfo,
  fetchCompanyFinancials,
  fetchCompanyPeers,
  fetchCompanyLogo,
  fetchCompanyKeyStats,
  fetchStockSymbols,
  fetchStockLists,
  fetchHistoricalPrices
} from "../services/stocks";
import {
  editUser,
  fetchUserBank,
  fetchTickerData,
  createNewUser,
  loginUser,
  createNewComment,
  createFavoriteTicker,
  deleteFavoriteTicker,
  getUserFavorites
} from "../services/usersHelpers";
import {
  getTickerIndex,
  getFilteredOptions,
  compileChartData
} from "../utilities";

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

export const appUpdateNameAndValue = (name, value) => {
  return { type: APP_UPDATE_NAME_AND_VALUE, payload: { [name]: value } };
};

export const appResetUserInput = () => {
  return { type: APP_RESET_USER_INPUT, payload: { userInput: "" } };
};

//QUERY BAR ACTIONS
export const queryBarFilterOptions = (name, value) => {
  return (dispatch, getState) => {
    const { autocompleteOptions } = getState().appReducer;
    const filteredOptions = getFilteredOptions(autocompleteOptions, value);
    const payload = {
      activeOption: 0,
      filteredOptions: filteredOptions,
      showOptions: true,
      [name]: value
    };
    return Promise.all([dispatch({ type: QUERY_BAR_FILTER_OPTIONS, payload })]);
  };
};

export const queryBarRemoveOptions = value => {
  const payload = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: value
  };
  return { type: QUERY_BAR_REMOVE_OPTIONS, payload };
};

export const queryBarUpdateTickerSymbol = value => {
  return (dispatch, getState) => {
    console.log("COMPASS UPDATE TICKER STATE: ", getState().appReducer);
    const { stockInfo } = getState().appReducer;
    const ticker = getTickerIndex(stockInfo, value);
    console.log("action compass ticker", ticker);
    return Promise.all([
      dispatch({ type: QUERY_BAR_UPDATE_TICKER, payload: { ticker } }),
      dispatch(appResetUserInput())
    ]);
  };
};

// PLANK ACTIONS
export const plankFetchTickerList = () => {
  return async (dispatch, getState) => {
    const { listSelect } = getState().appReducer;
    const stockList = await fetchStockLists(listSelect);
    const payload = { stockList };
    return dispatch({ type: PLANK_FETCH_TICKER_LIST, payload });
  };
};

// STOCK DETAILS ACTIONS
export const stockDetailFetchTickerInfo = (ticker = "AAPL") => {
  return async dispatch => {
    const tickerPrice = await fetchTickerPrice(ticker);
    const companyFinancials = await fetchCompanyFinancials(ticker);
    const companyInfo = await fetchCompanyInfo(ticker);
    const companyPeers = await fetchCompanyPeers(ticker);
    const companyLogo = await fetchCompanyLogo(ticker);
    const keyStats = await fetchCompanyKeyStats(ticker);
    const payload = {
      tickerInfo: {
        tickerPrice: tickerPrice,
        companyInfo: companyInfo,
        companyFinancials: companyFinancials,
        companyPeers: companyPeers,
        companyLogo: companyLogo,
        keyStats: keyStats
      }
    };
    return dispatch({ type: STOCK_DETAIL_FETCH_TICKER_INFO, payload });
  };
};

export const stockDetailToggleShowPeers = () => {
  return { type: STOCK_DETAIL_TOGGLE_SHOW_PEERS };
};

// COMPASS ACTIONS
export const compassHistoryDataFetch = ticker => {
  return async dispatch => {
    const historicalPrices = await fetchHistoricalPrices(ticker, "1d");
    const chartData = compileChartData(historicalPrices);
    const payload = {
      historicalPrices,
      chartData
    };
    return dispatch({ type: COMPASS_HISTORY_DATA_FETCH, payload });
  };
};

//CHEST ACTIONS
export const chestInitialDataFetch = () => {
  return async (dispatch, getState) => {
    const { currentUser } = getState().appReducer;
    let payload;
    if (currentUser) {
      const userInfo = await fetchUserBank(currentUser.id);
      payload = {
        userInfo: userInfo
      };
    } else {
      payload = {
        userInfo: "no user info"
      };
    }
    return dispatch({ type: CHEST_INITIAL_DATA_FETCH, payload });
  };
};

//USER ACTIONS
//LOGIN
export const loginNewUser = () => {
  return async (dispatch, getState) => {
    const { currentUser } = getState().appReducer;
    let payload;
    if (currentUser) {
      const userInfo = await fetchUserBank();
      payload = {
        userInfo: userInfo
      };
    } else {
      payload = {
        userInfo: "no user info"
      };
    }
    return dispatch({ type: USER_LOGIN, payload });
  };
};

//LOGOUT
export const logoutUser = () => {
  return async (dispatch, getState) => {
    const { currentUser } = getState().appReducer;
    let payload;
    if (currentUser) {
      const userInfo = await fetchUserBank();
      payload = {
        userInfo: userInfo
      };
    } else {
      payload = {
        userInfo: "no user info"
      };
    }
    return dispatch({ type: USER_LOGIN, payload });
  };
};

//EDIT
export const editCurrentUser = () => {
  return async (dispatch, getState) => {
    const { currentUser } = getState().appReducer;
    let payload;
    if (currentUser) {
      const userInfo = await fetchUserBank();
      payload = {
        userInfo: userInfo
      };
    } else {
      payload = {
        userInfo: "no user info"
      };
    }
    return dispatch({ type: USER_LOGIN, payload });
  };
};

//REGISTER
export const registerUser = () => {
  return async (dispatch, getState) => {
    const { currentUser } = getState().appReducer;
    let payload;
    if (currentUser) {
      const userInfo = await fetchUserBank();
      payload = {
        userInfo: userInfo
      };
    } else {
      payload = {
        userInfo: "no user info"
      };
    }
    return dispatch({ type: USER_LOGIN, payload });
  };
};
