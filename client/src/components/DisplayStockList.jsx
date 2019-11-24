import React from "react";
import Cards from "./Cards";

const DisplayStockList = props => {
  const { stockList } = props;
  return (
    <div className="stock-list">
      {stockList &&
        stockList.map((stock, index) => <Cards key={index} stock={stock} />)}
    </div>
  );
};
export default DisplayStockList;
