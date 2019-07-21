import React, { Component } from "react";
import RenderStockList from "./RenderStockList";
import Nav from "./Nav";
import { Route, Link, withRouter } from "react-router-dom";
import MarketTimer from "./MarketTimer";
import { connect } from "react-redux";
import { appUpdateNameAndValue, plankFetchTickerList } from "../actions";
import QueryBar from "./QueryBar";
//TODO: fix MarketTimer before final deployment
//TODO: starboard side - favorites instead of profile and current user
class Plank extends Component {
  constructor() {
    super();
    this.handleListChange = this.handleListChange.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
  }

  handleListChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("this is list change", name, value);
    this.props.dispatch(appUpdateNameAndValue(name, value));
  }

  handleListSubmit(e) {
    e.preventDefault();
    this.props.dispatch(plankFetchTickerList());
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.state.appReducer.listSelect !==
      this.props.state.appReducer.listSelect
    ) {
      this.props.dispatch(plankFetchTickerList());
    } else if (
      prevProps.state.appReducer.ticker !== this.props.state.appReducer.ticker
    ) {
      this.props.history.push(`/details/${this.props.state.appReducer.ticker}`);
    }
  }

  render() {
    return (
      <div className="plank-container">
        <Nav />
        <div className="page-titles">
          <h1>walk the plank</h1>
          <h2>in the depths, find yer treasure</h2>
        </div>
        {/* <MarketTimer stockList={this.props.stockList} /> */}
        <div className="plank-list">
          <QueryBar />
          <RenderStockList
            onListChange={this.handleListChange}
            onListSubmit={this.handleListSubmit}
            stockList={this.props.state.appReducer.stockList}
            title={this.props.state.appReducer.listSelect}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps)(Plank));
