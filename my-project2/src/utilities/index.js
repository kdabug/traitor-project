//functions that are re-used throughout the codebase
export const getTickerIndex = (stockInfo, userInput) => {
  console.log("STOCK INFO : ", stockInfo);
  const tickerIndex = stockInfo.filter(
    stock =>
      stock.name.toLowerCase() === userInput.toLowerCase() ||
      stock.symbol.toLowerCase() === userInput.toLowerCase()
  );
  console.log("GET TICKER INDEX: ", tickerIndex, tickerIndex[0]);
  return tickerIndex[0].symbol;
};

export const getFilteredOptions = (allOptions, userInput) => {
  return allOptions.filter(
    option => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
  );
};

export const createTickerVal = ticker => {
  return ticker || "AAPL";
};

export const compileChartData = history => {
  return history.map((timeStamp, el) => [timeStamp.label, timeStamp.average]);
};
