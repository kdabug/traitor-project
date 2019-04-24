import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const MarketTimer = props => {
  const marketOpen = () => {
    if (!props.stockList[0]) {
      return false;
    } else {
      const date = new Date().getTime();
      let openDate = new Date(props.stockList[0].openTime).getTime();
      return openDate > date;
    }
  };
  console.log("MARKETOPEN", marketOpen());
  console.log(props.stockList[0]);
  return (
    <div className="market-container">
      {marketOpen ? (
        <div className="market-open">
          <h1>aye aye capt'n ye market is open</h1>
        </div>
      ) : (
        <div>ships masts are down, market is closed</div>
      )}
    </div>
  );
};

export default withRouter(MarketTimer);
