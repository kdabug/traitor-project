import React, { Component } from "react";
import "./styles/App.css";
import Footer from "./components/Footer";
import { Route, Link, withRouter } from "react-router-dom";
import Welcome from "./containers/Welcome";
import Chest from "./containers/Chest";
import Plank from "./containers/Plank";
import Profile from "./containers/Profile";
import Records from "./containers/Records";
import StockDetails from "./containers/StockDetail";
import Compass from "./containers/Compass";
import { connect } from "react-redux";
import { appInitialDataFetch } from "./actions";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.dispatch(appInitialDataFetch());
  }

  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" render={() => <Welcome />} />
          <Route
            path="/chest"
            render={props => (
              <Chest
                {...props}
                userNumberInput={this.props.state.appReducer.userNumberInput}
                onChestSubmit={this.props.state.appReducer.handleChestSubmit}
                onChange={this.props.state.appReducer.handleBountyChange}
                onSubmit={this.props.state.appReducer.handleBountySubmit}
                currentBounty={this.props.state.appReducer.currentBounty}
                currentInventory={this.props.state.appReducer.currentInventory}
                stockInfo={this.props.state.appReducer.stockInfo}
                ticker={this.props.state.appReducer.ticker}
                tickerInfo={this.props.state.appReducer.tickerInfo}
                onKeyDown={this.handleQueryKeyDown}
                onFormChange={this.handleQueryChange}
                onClick={this.handleQueryClick}
                showOptions={this.props.state.appReducer.showOptions}
                userInput={this.props.state.appReducer.userInput}
                filteredOptions={this.props.state.appReducer.filteredOptions}
              />
            )}
          />
          <Route path="/plank" render={() => <Plank />} />
          <Route path="/compass" render={() => <Compass />} />
          <Route path="/records" render={() => <Records />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/details/:ticker"
            render={props => {
              console.log(
                "DETAIL TICKER: ",
                this.props.state.appReducer.ticker
              );
              return (
                <StockDetails
                  {...props}
                  ticker={this.props.state.appReducer.ticker}
                  fetchSpecificTickerInfo={this.fetchSpecificTickerInfo}
                  tickerInfo={this.props.state.appReducer.tickerInfo}
                  handleSubmit={this.handleSubmit}
                />
              );
            }}
          />
        </main>
        <Footer show={!this.props.match.isExact} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("MAP STATE TO PROPS - STATE: ", state);
  return { state };
};
export default withRouter(connect(mapStateToProps)(App));
