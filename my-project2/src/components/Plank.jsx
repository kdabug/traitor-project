import React, { Component } from "react";
import RenderStockList from "./RenderStockList";
import Nav from "./Nav";
import Form from "./Form";
import MarketTimer from "./MarketTimer";
//TODO: fix MarketTimer before final deployment
//TODO: starboard side - favorites instead of profile and current user
class Plank extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("PLANK: ", this.props.ticker);

    return (
      <div className="plank-container">
        <Nav />
        <div className="page-titles">
          <h1>walk the plank</h1>
          <h2>in the depths, find yer treasure</h2>
        </div>
        {/* <MarketTimer stockList={this.props.stockList} /> */}
        <div className="plank-list">
          <Form
            onChange={this.props.onChange}
            options={this.props.options}
            showOptions={this.props.showOptions}
            userInput={this.props.userInput}
            filteredOptions={this.props.filteredOptions}
            activeOption={this.props.activeOption}
            onClick={this.props.onClick}
            onSubmit={this.props.onDetailSubmit}
          />
          <RenderStockList
            onListChange={this.props.onListChange}
            onListSubmit={this.props.onListSubmit}
            stockList={this.props.stockList}
          />
        </div>
      </div>
    );
  }
}
export default Plank;
