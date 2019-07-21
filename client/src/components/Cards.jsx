import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const Cards = props => {
  return (
    <div className="cards-container">
      <div className="card-symbol">
        <h1>{props.stock.symbol}</h1>
      </div>
      <h2>{props.stock.name}</h2>
      <div className="card-prices">
        <h2>
          Today's High: $<span className="high-price">{props.stock.high}</span>
        </h2>
        <h2>
          Today's Low: $<span className="low-price">{props.stock.low}</span>
        </h2>
        <h2>Current Price: ${props.stock.latestPrice}</h2>
      </div>
      <div className="cards-buttons-container">
        <button
          className="card-button"
          onClick={() => props.history.push(`/details/${props.stock.symbol}`)}
        >
          Details
        </button>
        <button
          className="card-button"
          onClick={() => props.history.push(`/compass/${props.stock.symbol}`)}
        >
          Compass
        </button>
      </div>
    </div>
  );
};

export default withRouter(Cards);
