import {
  APP_INITIAL_DATA_FETCH,
  APP_UPDATE_NAME_AND_VALUE,
  APP_RESET_USER_INPUT,
  QUERY_BAR_FILTER_OPTIONS,
  QUERY_BAR_UPDATE_TICKER,
  QUERY_BAR_REMOVE_OPTIONS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_EDIT,
  CHEST_INITIAL_DATA_FETCH,
  STOCK_DETAIL_FETCH_TICKER_INFO,
  PLANK_FETCH_TICKER_LIST,
  STOCK_DETAIL_TOGGLE_SHOW_PEERS,
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
    // { name: "Apple", ticker: "AAPL", amount: "2" },
    // { name: "Apple", ticker: "AAPL", amount: "2" }
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
  chartData: [],

  stockDetailShowPeers: false,

  registerFormData: {
    username: "",
    email: "",
    password: "",
    avatar_id: "",
    total_score: ""
  },
  currentUser: null,
  toggleLogin: true,
  loginFormData: {
    email: "",
    password: ""
  },
  token: "",
  userData: {}
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
    case CHEST_INITIAL_DATA_FETCH: {
      state = { ...state, ...action.payload };
    }
    case COMPASS_HISTORY_DATA_FETCH: {
      state = { ...state, ...action.payload };
    }
    case PLANK_FETCH_TICKER_LIST: {
      state = { ...state, ...action.payload };
    }
    case STOCK_DETAIL_FETCH_TICKER_INFO: {
      state = { ...state, ...action.payload };
    }
    case STOCK_DETAIL_TOGGLE_SHOW_PEERS: {
      state = { ...state, stockDetailShowPeers: !state.stockDetailShowPeers };
    }
    case USER_LOGIN: {
      state = { ...state, ...action.payload };
    }
    case USER_EDIT: {
      state = { ...state, ...action.payload };
    }
    case USER_REGISTER: {
      state = { ...state, ...action.payload };
    }
    case USER_LOGOUT: {
      state = { ...state, ...action.payload };
    }
  }
  return state;
}
export default appReducer;
