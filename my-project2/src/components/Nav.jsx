import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Nav extends Component {
  render() {
    const { currentUser, userData } = this.props.state.appReducer;
    return (
      <>
        <nav>
          <Link to="/" title="mast">
            <div id="flag" />
            <div>flag</div>
          </Link>
          <Link to="/chest">
            <div id="chest" />
            <div>chest</div>
          </Link>
          <Link to="/plank">
            <div id="anchor" />
            <div>anchor</div>
          </Link>
          <Link to="/compass">
            <div id="compass" />
            <div>compass</div>
          </Link>
          {currentUser ? (
            <>
              <Link
                className="link"
                to={"/user/" + userData.id + "/username/" + userData.username}
              >
                profile
              </Link>
              <Link className="link" to="/logout">
                logout
              </Link>
            </>
          ) : (
            <Link className="link" to="/login">
              login
            </Link>
          )}
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps)(Nav));
