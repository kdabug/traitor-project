// import React, { Component } from "react";
// import Nav from "./Nav";
// import ChooseBounty from "./ChooseBounty";
// import Form from "./QueryBar";
// import { connect } from "react-redux";
// import { Route, Link, withRouter } from "react-router-dom";
// //TODO add websocket (socket.id) for DEEP Official Price for saved stocks.
// class Chest extends Component {
//   constructor(props) {
//     super(props);
//     this.props.state.appReducer = {
//       howManyCanIBuy: ""
//     };
//   }
//   createHowManyCanIBuy() {
//     const currentPrice = this.props.tickerInfo.tickerPrice;
//     const currentBounty = this.props.currentBounty;
//     return currentPrice / currentBounty;
//   }

//   render() {
//     console.log("CHEST PROPS: ", this.props);
//     return (
//       <div className="chest-container">
//         <Nav />
//         <div className="page-titles">
//           <h1>chose the route of the traitor, have ye?</h1>
//           <h2>yer treasure chest</h2>
//         </div>
//         <div className="chest-currents-display">
//           <ChooseBounty
//             currentBounty={this.props.currentBounty}
//             onChange={this.props.onChange}
//             onSubmit={this.props.onSubmit}
//             userNumberInput={this.props.userNumberInput}
//           />

//           {/* <h2>Yer Bounty: </h2> */}
//           <Form
//             onChange={this.props.onFormChange}
//             options={this.props.options}
//             showOptions={this.props.showOptions}
//             userInput={this.props.userInput}
//             filteredOptions={this.props.filteredOptions}
//             activeOption={this.props.activeOption}
//             onClick={this.props.onClick}
//             onSubmit={this.props.onChestSubmit}
//             ticker={this.props.ticker}
//           />
//           <div className="inventory-list">
//             {this.props.state.appReducer.createHowManyCanIBuy}
//             <h2>
//               You can buy: {this.props.state.appReducer.createHowManyCanIBuy}
//             </h2>
//           </div>
//         </div>

//         <h2>Treasurey:</h2>
//         <ul className="inventory-list">
//           {" "}
//           {this.props.currentInventory.map((stock, index) => (
//             <li key={index}>
//               {stock.name} {stock.ticker} {stock.amount}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ state });
// export default withRouter(connect(mapStateToProps)(Chest));
