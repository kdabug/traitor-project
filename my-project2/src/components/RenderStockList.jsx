import React from "react";
import DisplayStockList from "./DisplayStockList";

const RenderStockList = props => {
  return (
    <div className="form-stock-list">
      <p>Search Stocks by Currated Lists:</p>
      <form onSubmit={props.onListSubmit}>
        <select
          className="list-selector"
          name="listSelect"
          onChange={props.onListChange}
        >
          <option value="mostactive">Most Active</option>
          <option value="gainers">Winners</option>
          <option value="losers">Losers</option>
          <option value="iexvolume">Volume Traded</option>
          <option value="iexpercent">Percent</option>
          <option value="infocus">In Focus</option>
        </select>
        <input type="submit" />
      </form>
      <DisplayStockList stockList={props.stockList} />
    </div>
  );
};
export default RenderStockList;
