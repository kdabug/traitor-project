"use strict";
import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const Welcome = props => {
  return (
    <div className="layer">
      <div className="welcome-container">
        <div className="welcome-script">
          <h2 className="subtitle">
            be ye warned:
            <br /> we send pirates, <br />
            theives &<br /> <span className="title">traitors</span>
            <br />
            to the stocks.
          </h2>
          <button
            className="welcome-button"
            onClick={() => props.history.push("/chest")}
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Welcome);
