import {
  APP_INITIAL_DATA_FETCH,
  APP_UPDATE_NAME_AND_VALUE,
  APP_RESET_USER_INPUT,
  QUERY_BAR_FILTER_OPTIONS,
  QUERY_BAR_UPDATE_TICKER,
  QUERY_BAR_REMOVE_OPTIONS,
  PLANK_FETCH_TICKER_INFO,
  PLANK_FETCH_TICKER_LIST,
  COMPASS_HISTORY_DATA_FETCH
} from "../constants/actionTypes";

const initialState = {
  ticker: "",
  tickerInfo: {
    tickerPrice: 0,
    companyInfo: {},
    companyFinancials: {},
    companyPeers: [],
    companyLogo: {},
    keyStats: {}
  },

  currentBounty: "",
  currentInventory: [
    { name: "Apple", ticker: "AAPL", amount: "2" },
    { name: "Apple", ticker: "AAPL", amount: "2" }
  ],
  userNumberInput: "",
  transactionHistory: [],

  stockInfo: [],
  userInput: "",
  autocompleteOptions: [],
  activeOption: 0,
  filteredOptions: [],
  showOptions: false,

  listSelect: "mostActive",
  stockList: [],

  historicalPrices: [],
  chartData: []
};

function appReducer(state = initialState, action) {
  console.log("REDUCER - ACTION PAYLOAD: ", action.payload);
  console.log("REDUCER - ACTION TYPE: ", action.type);
  switch (action.type) {
    case APP_INITIAL_DATA_FETCH: {
      state = { ...state, ...action.payload };
    }
    case APP_RESET_USER_INPUT: {
      state = { ...state, ...action.payload };
    }
    case APP_UPDATE_NAME_AND_VALUE: {
      state = { ...state, ...action.payload };
    }
    case QUERY_BAR_UPDATE_TICKER: {
      state = { ...state, ...action.payload };
    }
    case QUERY_BAR_FILTER_OPTIONS: {
      state = { ...state, ...action.payload };
    }
    case QUERY_BAR_REMOVE_OPTIONS: {
      state = { ...state, ...action.payload };
    }
    case COMPASS_HISTORY_DATA_FETCH: {
      state = { ...state, ...action.payload };
    }
    case PLANK_FETCH_TICKER_INFO: {
      state = { ...state, ...action.payload };
    }
    case PLANK_FETCH_TICKER_LIST: {
      state = { ...state, ...action.payload };
    }
  }
  return state;
}
export default appReducer;
