import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Route, Link, withRouter } from "react-router-dom";
import {
  stockDetailToggleShowPeers,
  stockDetailFetchTickerInfo
} from "./../../actions";
import { connect } from "react-redux";

class StockDetail extends Component {
  constructor(props) {
    super(props);
    this.handleShowPeersButton = this.handleShowPeersButton.bind(this);
  }
  handleShowPeersButton(e) {
    e.preventDefault();
    this.props.dispatch(stockDetailToggleShowPeers());
  }

  componentDidMount() {
    this.props.dispatch(
      stockDetailFetchTickerInfo(this.props.state.appReducer.ticker)
    );
  }

  render() {
    const {
      ticker,
      tickerInfo,
      stockDetailShowPeers
    } = this.props.state.appReducer;
    console.log("STOCK DETAIL ticker: ", ticker);
    console.log("STOCK DETAIL tickerInfo: ", tickerInfo);

    return (
      <>
        <Nav />
        <div className="stock-detail">
          <div className="head-stock-detail-container">
            <img className="logo" src={tickerInfo.companyLogo.url} />
            <div className="stock-detail-info">
              <h2>
                {tickerInfo.companyInfo.symbol} -{" "}
                {tickerInfo.companyInfo.companyName || "no name found"}
              </h2>
              <p>
                Industry:{" "}
                {tickerInfo.companyInfo.industry || "industry unknown"}
              </p>
              <p>
                Description:{" "}
                {tickerInfo.companyInfo.description || "no description found"}
              </p>
              <p>
                Website:{" "}
                {tickerInfo.companyInfo.website ? (
                  <a href={tickerInfo.companyInfo.website}>
                    {tickerInfo.companyInfo.website}
                  </a>
                ) : (
                  "no linked website"
                )}{" "}
              </p>
            </div>
          </div>

          <div className="stock-price-info">
            <p>Price: ${tickerInfo.tickerPrice || "no price found"}</p>
            <p>
              Year High: $
              <span className="high-price">
                {tickerInfo.keyStats.week52high}
              </span>
            </p>
            <p>
              Year Low: $
              <span className="low-price">{tickerInfo.keyStats.week52low}</span>
            </p>
            <p>Year-to-date change: {tickerInfo.keyStats.ytdChangePercent}%</p>
          </div>
          <div className="stock-buttons">
            <button
              className="show-details-button"
              onClick={this.handleShowPeersButton}
            >
              {stockDetailShowPeers ? "Hide Peers" : "Show Peers"}
            </button>
            {stockDetailShowPeers && (
              <div className="show-peers">
                <ul className="peers">
                  {tickerInfo.companyPeers.map((peer, index) => (
                    <li key={index}>{peer}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="show-details-button"
              onClick={() => this.props.history.push(`/compass/${ticker}`)}
            >
              Compass
              <br />
              Map Stock OverTime
            </button>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps)(StockDetail));
