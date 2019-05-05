import React, { Component } from "react";
import Nav from "./Nav";
import { Route, Link, withRouter } from "react-router-dom"; //import Tooltip from "@material-ui/core/Tooltip";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";
import { connect } from "react-redux";
import QueryBar from "./QueryBar";
import { createTickerVal } from "../utilities";
import { compassHistoryDataFetch } from "../actions";
ReactChartkick.addAdapter(Chart);

class Compass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(
      compassHistoryDataFetch(
        createTickerVal(this.props.state.appReducer.ticker)
      )
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.state.appReducer.ticker !== this.props.state.appReducer.ticker
    ) {
      console.log(
        "componentDidUpdate COMPASS",
        this.props.state.appReducer.ticker
      );
      this.props.dispatch(
        compassHistoryDataFetch(
          createTickerVal(this.props.state.appReducer.ticker)
        )
      );
    }
  }

  render() {
    const { chartData } = this.props.state.appReducer;
    const lineChart = (
      <div>
        <LineChart
          data={chartData}
          title={createTickerVal()}
          min={null}
          max={null}
          width={"800px"}
          height={"400px"}
          hAxis={"Time"}
          vAxis={"Price"}
        />
      </div>
    );
    return (
      <div className="compass-container">
        <Nav />
        <div className="wrapper">
          <div className="wave" />
        </div>
        <div className="page-titles">
          <h1>the Compass</h1>
          <p>
            red skies at morn, traders take warn <br /> red skies at night,
            traders delight
          </p>
        </div>
        <QueryBar
          redirect={() =>
            this.props.history.push(
              `/compass/${this.props.state.appReducer.ticker}`
            )
          }
        />
        {chartData && <div className="chart-container">{lineChart}</div>}
      </div>
    );
  }
}
const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps)(Compass));
