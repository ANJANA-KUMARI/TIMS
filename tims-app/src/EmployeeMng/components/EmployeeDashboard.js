import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "../EmployeeMng.css";
import AddEmployeeForm from "../containers/AddEmployeeForm";
import { ADD_EMPLOYEE_POPUP_MODE } from "./employees/AddEmployee";

class EmployeeDashboard extends Component {
  state = {
    showAddEmployeeForm: false,
    employeesCount: this.props.emloyeesCount
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubjects();
    this.props.fetchEmployees();
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      employeesCount: nextProp.employeesCount
    });
  }

  toggleAddEmployeeForm = () => {
    this.setState({
      showAddEmployeeForm: !this.state.showAddEmployeeForm
    });
  };

  render() {
    return (
      <div className="shortcut-wrap">
        <Card
          onClick={this.toggleAddEmployeeForm}
          className="employee-dashboard-shortcut"
        >
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/class.svg" />
              </Avatar>
            }
            title="Add Employee"
            subheader={this.state.employeesCount}
          />
        </Card>

        {this.state.showAddEmployeeForm ? (
          <AddEmployeeForm
            mode={ADD_EMPLOYEE_POPUP_MODE.INSERT}
            onCancelPopup={this.toggleAddEmployeeForm}
          />
        ) : null}
      </div>
    );
  }
}

export default EmployeeDashboard;
