import React, { Component } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import HomePage from "./HomePage";
import ClassDashboard from "../ClassMng/containers/ClassDashboardContainer";
import SubjectsPage from "../ClassMng/containers/SubjectsPage";
import StudyMaterialsDashboard from "../StudyMaterial/containers/StudyMaterialDashboardContainer";
import { Route } from "react-router-dom";
import { ROUTE_PATHS, ROUTE_DASHBOARD_TITLES } from "../Constants";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dashboardTitleUpdated } from "./actions/UiActions";
import EmployeeDashboard from "../EmployeeMng/containers/employeeDashboardContainer";
import TutionClassesPage from "../ClassMng/containers/TutionClassesPage";
import EmployeesPage from "../EmployeeMng/containers/EmployeesPage";
import StudentDashboard from "../Student/containers/StudentsPage";
import TutionClassReportContainer from "../ClassMng/containers/TutionClassReportContainer";

const mapDispatchToProps = (dispatch, ownprops) => ({
  updateDashboardTitle: newTitle => dispatch(dashboardTitleUpdated(newTitle))
});

class Dashboard extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // update header title
      console.log("updating title");
      const newTitle = ROUTE_DASHBOARD_TITLES.filter(
        r => r.path === nextProps.location.pathname
      )[0].title;

      console.log("newtitle =>" + newTitle);
      this.props.updateDashboardTitle(newTitle);
    }
  }

  render() {
    return (
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
            {/* <Route path={ROUTE_PATHS.TUTION_CLASS} component={ClassesPage} /> */}
            <Route path={ROUTE_PATHS.SUBJECTS} component={SubjectsPage} />
            <Route
              path={ROUTE_PATHS.STUDY_MATERIAL}
              component={StudyMaterialsDashboard}
            />
            <Route
              path={ROUTE_PATHS.TUTION_CLASS_REPORT}
              component={TutionClassReportContainer}
            />

            <Route
              path={ROUTE_PATHS.TUTION_CLASS}
              component={TutionClassesPage}
            />
            {/* <Route path="/" component={HomePage} /> */}
            <Route
              path={ROUTE_PATHS.EMPLOYEE_DASHBOARD}
              component={EmployeeDashboard}
            />
            <Route path={ROUTE_PATHS.EMPLOYEES} component={EmployeesPage} />
            <Route path={ROUTE_PATHS.EMPLOYEES} component={EmployeeDashboard} />
            <Route path={ROUTE_PATHS.STUDENTS} component={StudentDashboard} />
          </div>
        </div>
      </div>
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
    width: "100%",
    overflow: "auto"
  }
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Dashboard)
);
