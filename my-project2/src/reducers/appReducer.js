import {
  APP_INITIAL_DATA_FETCH,
  APP_RESET_USER_INPUT,
  APP_UPDATE_NAME_AND_VALUE,
  COMPASS_UPDATE_TICKER
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
  stockList: []
};

function appReducer(state = initialState, action) {
  console.log("REDUCER - ACTION PAYLOAD: ", action.payload);
  console.log("REDUCER - ACTION TYPE: ", action.type);
  console.log("APP REDUCER STATE: ", state);
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
    case COMPASS_UPDATE_TICKER: {
      state = { ...state, ...action.payload };
    }
  }
  return state;
}
export default appReducer;
