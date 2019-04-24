import React, { Component } from "react";
import Nav from "./Nav";
import { Route, Link, withRouter } from "react-router-dom";

// tickerInfo: {
//   tickerPrice: 0,
//   companyInfo: {},
//   companyFinancials: {},
//   HistoricalPrices: [],
//   companyPeers: [],
//   companyLogo: {},
//   keyStats: {}
// },
class StockDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeers: false
    };
    this.handleShowPeersButton = this.handleShowPeersButton.bind(this);
  }
  handleShowPeersButton(e) {
    e.preventDefault();
    this.setState(prevState => ({ showPeers: !prevState.showPeers }));
  }
  async componentDidMount() {
    await this.props.fetchSpecificTickerInfo(this.props.match.params.ticker);
  }

  render() {
    const { ticker, tickerInfo } = this.props;
    console.log("STOCK DETAIL ticker: ", ticker);
    console.log("STOCK DETAIL tickerInfo: ", tickerInfo);
    console.log("STOCK DETAIL match params: ", this.props.match.params.ticker);
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
              {this.state.showPeers ? "Hide Peers" : "Show Peers"}
            </button>
            {this.state.showPeers && (
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
              onClick={() =>
                this.props.history.push(
                  `/compass/${this.props.match.params.ticker}`
                )
              }
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
export default withRouter(StockDetail);
