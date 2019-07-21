import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const ChooseBounty = props => {
  return (
    <div className="bounty-container">
      <form id="bounty-set">
        <input
          type="text"
          className="set-bounty-box"
          onChange={props.onChange}
          value={props.userNumberInput}
          onSubmit={props.onSubmit}
          name="currentBounty"
          autoComplete="off"
          placeholder="choose dollar amount"
        />
      </form>
      <button
        form="query-search-form"
        type="submit"
        value="submit"
        onClick={props.onSubmit}
        className="set-bounty-btn"
      >
        {/* <Link to={`/details/${ticker}`} className="more-details-button"> */}
        Submit
        {/* </Link> */}
      </button>
    </div>
  );
};

export default withRouter(ChooseBounty);
