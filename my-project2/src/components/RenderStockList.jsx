import React from "react";
import DisplayStockList from "./DisplayStockList";

const RenderStockList = props => {
  const listSelect = [
    { type: "mostactive", title: "Most Active" },
    { type: "gainers", title: "Gainers" },
    { type: "losers", title: "Losers" },
    { type: "iexvolume", title: "Volume Traded" },
    { type: "iexpercent", title: "Percent Traded" },
    { type: "infocus", title: "Highlighted Stocks" }
  ];
  return (
    <div className="form-stock-list">
      <p>Search Stocks by Currated Lists:</p>
      <p>Now Showing {props.title}</p>
      <form onSubmit={props.onListSubmit}>
        <select
          className="list-selector"
          name="listSelect"
          onChange={props.onListChange}
        >
          {listSelect.map(list => {
            if (list.type === props.title) {
              return (
                <option value={list.type} selected>
                  {list.title}
                </option>
              );
            } else {
              return <option value={list.type}>{list.title}</option>;
            }
          })}
        </select>
        <input type="submit" />
      </form>
      <DisplayStockList stockList={props.stockList} />
    </div>
  );
};
export default RenderStockList;
