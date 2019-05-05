import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  queryBarRemoveOptions,
  queryBarFilterOptions,
  queryBarUpdateTickerSymbol,
  appUpdateNameAndValue
} from "../actions";

class QueryBar extends Component {
  constructor(props) {
    super(props);
    this.handleQueryBarChange = this.handleQueryBarChange.bind(this);
    this.handleQueryBarClick = this.handleQueryBarClick.bind(this);
    this.handleQueryBarSubmit = this.handleQueryBarSubmit.bind(this);
  }

  handleQueryBarClick(e) {
    const userInput = e.currentTarget.innerText;
    this.props.dispatch(queryBarRemoveOptions(userInput));
  }

  handleQueryBarChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("query bar change", name, value);
    this.props.dispatch(appUpdateNameAndValue(name, value));
    this.props.dispatch(queryBarFilterOptions(name, value));
  }

  handleQueryBarSubmit(e) {
    e.preventDefault();
    this.props.redirect();
    this.props.dispatch(
      queryBarUpdateTickerSymbol(this.props.state.appReducer.userInput)
    );
  }

  render() {
    const {
      activeOption,
      filteredOptions,
      showOptions,
      userInput
    } = this.props.state.appReducer;
    console.log("queryBAR userINput", userInput);
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li
                  id="list-els"
                  className={className}
                  key={`${optionName}-${index}`}
                  onClick={this.handleQueryBarClick}
                >
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    return (
      <div className="form-query">
        <div className="form-container">
          <form id="query-search-form">
            <input
              type="text"
              className="search-box"
              onChange={this.handleQueryBarChange}
              value={userInput}
              onSubmit={this.handleQueryBarSubmit}
              name="userInput"
              autoComplete="off"
              placeholder="search company name or ticker symbol"
            />
          </form>
          <button
            form="query-search-form"
            type="submit"
            value="submit"
            onClick={this.handleQueryBarSubmit}
            className="search-btn"
          >
            {/* <Link to={`/details/${ticker}`} className="more-details-button"> */}
            Submit
            {/* </Link> */}
          </button>
        </div>
        <div className="options-container">{optionList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps)(QueryBar));

/* //this autocomplete has been researched - but has focused info from
//https://alligator.io/react/react-autocomplete/ and
//https://blog.bitsrc.io/building-a-react-autocomplete-component-from-scratch-3f4d5618aa14 */
