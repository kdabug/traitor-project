import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://cloud.iexapis.com";
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `${TOKEN}`
//   }
// });

const fetchStockSymbols = async () => {
  try {
    const resp = await axios(
      `${BASE_URL}/beta/ref-data/symbols?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchStockLists = async listType => {
  //returns an array
  console.log("this is fetchList listtype", listType);
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/market/list/${listType}?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchCompanyFinancials = async ticker => {
  //grossProfit, costOfRevenue, operatingIncome, netIncome, researchAndDevelopment, currentAssets, currentCash, currentDebts, totalLiabilities, etc.
  //returns an object
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/financials?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchCompanyInfo = async ticker => {
  //company, symbol, exchange, industry, website, description, CEO, sector
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/company?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchHistoricalPrices = async (ticker, range) => {
  //can do ranges of max, 5y, 2y, 1y, ytd, 6m, 3m, 1m , 1d, or specific date with date/date
  //returns an array
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/chart/${range}?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchCompanyKeyStats = async ticker => {
  //week52high, week52low, week52change, sharesOutstanding, employees, ytdChangePercent
  //and other change percents, moving averages, etc.
  //returns an object
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/stats?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchCompanyLogo = async ticker => {
  //returns as a url key
  //returns an object
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/logo?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchCompanyPeers = async ticker => {
  //returns an array
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/peers?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchTickerPrice = async ticker => {
  //price for ticker
  //returns a number
  try {
    const resp = await axios(
      `${BASE_URL}/beta/stock/${ticker}/price?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

export {
  fetchTickerPrice,
  fetchCompanyInfo,
  fetchCompanyFinancials,
  fetchCompanyPeers,
  fetchCompanyLogo,
  fetchCompanyKeyStats,
  fetchStockSymbols,
  fetchStockLists,
  fetchHistoricalPrices
};
