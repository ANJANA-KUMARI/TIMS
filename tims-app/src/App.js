import React from 'react';
import SideBar from './components/SideBar';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClassDashboard from "./ClassMng/components/ClassDashboard";
import './App.css';
import { ROUTE_PATHS } from './Constants';

function App() {
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
            <Route path={ROUTE_PATHS.CLASSES} component={ClassDashboard} />
            {/* <Route path="/" component={HomePage} /> */}
          </div>
        </div>
      </div>
    </Router>
  );
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
}

export default App;
