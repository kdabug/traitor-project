// example reducer
//takes two arguments (state and payload)
//src/js/reducers/index.js
import { ADD_ARTICLE } from "../constants/action-types";
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

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
