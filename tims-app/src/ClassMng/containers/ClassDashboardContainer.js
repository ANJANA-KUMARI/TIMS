import React from "react";
import { connect } from "react-redux";
import ClassDashboard from "../components/ClassDashboard";

const ClassDashboardContainer = ({ dispatch }) => {
  return <ClassDashboard />;
};

export default connect(
  null,
  null
)(ClassDashboardContainer);
