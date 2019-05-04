//functions that are re-used throughout the codebase
handleCompassSubmit(e) {
  e.preventDefault();
  const { name, value } = e.target;
  console.log("target", name);
  this.setState((prevState, newState) => ({
    [name]: value
  }));
  const { userInput, stockInfo } = this.state;
  
  this.setState((prevState, newState) => ({
    ticker: newTicker,
    userInput: ""
  }));
  this.props.history.push(`/compass/${newTicker}`);
}

export const getTickerIndex = (stockInfo, userInput) => { 
  const tickerIndex = stockInfo.filter(
    stock =>
      stock.name.toLowerCase() === userInput.toLowerCase() ||
      stock.symbol.toLowerCase() === userInput.toLowerCase()
  );
  return tickerIndex[0].symbol;

}