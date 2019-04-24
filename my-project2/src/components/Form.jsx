import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

class Form extends Component {
  render() {
    // propTypes = {
    //   options: PropTypes.instanceOf(Array).isRequired
    // };
    const {
      onChange,
      onClick,
      onKeyDown,
      activeOption,
      filteredOptions,
      showOptions,
      userInput,
      onSubmit,
      ticker
    } = this.props;
    console.log("FORM TICKER: ", this.props);
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
                  onClick={onClick}
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
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
              onSubmit={onSubmit}
              name="userInput"
              autoComplete="off"
              placeholder="search company name or ticker symbol"
            />
          </form>
          <button
            form="query-search-form"
            type="submit"
            value="submit"
            onClick={onSubmit}
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
export default withRouter(Form);

/* //this autocomplete has been researched - but has focused info from
//https://alligator.io/react/react-autocomplete/ and
//https://blog.bitsrc.io/building-a-react-autocomplete-component-from-scratch-3f4d5618aa14 */
