import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "../EmployeeMng.css";
import AddEmployeeForm from "../containers/AddEmployeeForm";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../Constants";
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
    this.props.fetchEmployeeTypes();
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
        <Card className="employee-dashboard-shortcut">
          <Link
            to={ROUTE_PATHS.EMPLOYEES}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardHeader
              avatar={
                <Avatar>
                  <img className="h-100" src="/image/employees.png" />
                </Avatar>
              }
              title="Employees"
              subheader={this.state.employeesCount}
            />
          </Link>
        </Card>

        <Card
          onClick={this.toggleAddEmployeeForm}
          className="employee-dashboard-shortcut"
        >
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/add-employee.png" />
              </Avatar>
            }
            title="Add Employee"
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
