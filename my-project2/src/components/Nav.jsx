// import React from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from "reactstrap";

// export default class Menu extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.props.state.appReducer = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.props.state.appReducer.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto">
//             reactstrap
//           </NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.props.state.appReducer.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink onClick={() => this.props.history.push(`/`)}>
//                   Enter
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink onClick={() => this.props.history.push(`/compass`)}>
//                   Compass
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink onClick={() => this.props.history.push(`/chest`)}>
//                   chest
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink onClick={() => this.props.history.push(`/plank`)}>
//                   Plank
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import PopupState, {
//   bindTrigger,
//   bindMenu
// } from "material-ui-popup-state/index";
// import { Route, Link, withRouter } from "react-router-dom";
// import OverridesCss from "./Over";

// function Nav(props) {
//   return (
//     <>
//       <PopupState variant="popover" popupId="demo-popup-menu">
//         {popupState => (
//           <React.Fragment>
//             <Button
//               className="nav-button"
//               variant="contained"
//               {...bindTrigger(popupState)}
//             >
//               Traitor Menu
//             </Button>
//             <Menu {...bindMenu(popupState)}>
//               <MenuItem onClick={() => props.history.push(`/`)}>Enter</MenuItem>
//               <MenuItem onClick={() => props.history.push(`/chest`)}>
//                 Chest
//               </MenuItem>
//               <MenuItem onClick={() => props.history.push(`/compass`)}>
//                 Compass
//               </MenuItem>
//               <MenuItem onClick={() => props.history.push(`/plank`)}>
//                 Plank
//               </MenuItem>
//             </Menu>
//           </React.Fragment>
//         )}
//       </PopupState>
//     </>
//   );
// }

// export default withRouter(Nav);

// import React from "react";
// import { Route, Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// //TODO: Change locker and profile components once components are completed

// const styles = {
//   list: {
//     width: 250
//   },
//   fullList: {
//     width: "auto"
//   }
// };
// const theme = createMuiTheme({
//   overrides: {
//     // Name of the component ⚛️ / style sheet
//     MuiPaper: {
//       root: {
//         backgroundColor: "lightgrey",
//         color: "lightgrey"
//       }
//     },

//     MuiButton: {
//       // Name of the rule
//       text: {
//         // Some CSS
//         background: " rgba(85, 72, 46, 1)",
//         borderRadius: 3,
//         border: 0,
//         color: "white",
//         height: 48,
//         padding: "0 30px",
//         boxShadow: "0 3px 5px 2px  rgba(85, 72, 46, .5)"
//       }
//     }
//   },
//   typography: {
//     fontFamily: ["IM Fell English SC", "IM Fell English", "Inconsolata"].join(
//       ","
//     )
//   }
// });

// class Nav extends React.Component {
//   state = {
//     left: false
//   };

//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open
//     });
//   };

//   render() {
//     const { classes } = this.props;

//     const sideList = (
//       <div className={`${classes.list} nav`}>
//         <MuiThemeProvider theme={theme}>
//           <List>
//             {[
//               <Link to="/">Enter</Link>,
//               <Link to="/chest">Chest</Link>,
//               <Link to="/plank">Plank</Link>,
//               <Link to="/compass">Compass</Link>
//             ].map(text => (
//               <ListItem button key={text}>
//                 <ListItemText primary={text} className="nav-items" />
//               </ListItem>
//             ))}
//           </List>
//         </MuiThemeProvider>
//       </div>
//     );

//     return (
//       <div className="nav">
//         <MuiThemeProvider theme={theme}>
//           <Button
//             className="nav-button"
//             onClick={this.toggleDrawer("left", true)}
//           >
//             traitor menue
//           </Button>
//         </MuiThemeProvider>

//         <Drawer
//           open={this.props.state.appReducer.left}
//           onClose={this.toggleDrawer("left", false)}
//         >
//           <div
//             tabIndex={0}
//             role="button"
//             className="nav-bar"
//             onClick={this.toggleDrawer("left", false)}
//             onKeyDown={this.toggleDrawer("left", false)}
//           >
//             {sideList}
//           </div>
//         </Drawer>
//       </div>
//     );
//   }
// }

// // TemporaryDrawer.propTypes = {
// //   classes: PropTypes.object.isRequired
// // };

// export default withStyles(styles)(Nav);

import React from "react";
import { Route, Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/" title="mast">
          <div id="flag" />
        </Link>
        <Link to="/chest">
          <div id="chest" />
        </Link>
        <Link to="/plank">
          <div id="anchor" />
        </Link>
        <Link to="/compass">
          <div id="compass" />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
