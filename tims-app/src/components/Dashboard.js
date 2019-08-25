import React, { Component } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import HomePage from "./HomePage";
import ClassDashboard from "../ClassMng/components/ClassDashboard";
import ClassesPage from "../ClassMng/components/tutionClass/ClassesPage";
import SubjectsPage from "../ClassMng/containers/SubjectsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTE_PATHS } from "../Constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div style={sideBarStyle.root}>
          <div style={sideBarStyle.header}>
            <Header />
          </div>
          <div style={sideBarStyle.main}>
            <div style={sideBarStyle.sideBar}>
              <SideBar />
            </div>
            <div style={sideBarStyle.content}>
              <Route path={ROUTE_PATHS.HOMEPAGE} exact component={HomePage} />
              <Route
                path={ROUTE_PATHS.CLASS_DASHBOARD}
                component={ClassDashboard}
              />
              <Route path={ROUTE_PATHS.TUTION_CLASS} component={ClassesPage} />
              <Route path={ROUTE_PATHS.SUBJECTS} component={SubjectsPage} />
              {/* <Route path="/" component={HomePage} /> */}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
const sideBarStyle = {
  root: {
    width: "100%",
    height: "100vh"
  },
  header: {
    height: "50px",
    backgroundColor: "#1976d2",
    boxShadow: "0px 1px 6px 0px rgba(32,33,36,0.28)"
  },
  main: {
    height: "calc( 100% - 50px )",
    display: "flex"
  },
  sideBar: {
    width: "100px",
    height: "100%",
    borderRight: "1px solid #aaa"
  },
  content: {
    height: "100%",
    width: "100%"
  }
};

export default Dashboard;
