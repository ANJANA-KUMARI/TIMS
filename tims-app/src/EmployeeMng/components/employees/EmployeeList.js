import React, { Component } from "react";
import Employee from "./Employee";
import AddEmployeeForm from "../../containers/AddEmployeeForm";
import { ADD_EMPLOYEE_POPUP_MODE } from "./AddEmployee";

export class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }

  state = {
    showUpdatePopUp: false,
    employeeToUpdate: null,
    employees: this.props.employees
  };

  toggleUpdatePopUp = () => {
    this.setState({
      showUpdatePopUp: !this.state.showUpdatePopUp
    });
  };

  handleUpdate = employee => {
    this.toggleUpdatePopUp();
    this.setState({
      employeeToUpdate: employee
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      employees: nextProps.employees
    });
  }

  render() {
    return (
      <div style={{ display: "flex", padding: "20px", flexWrap: "wrap" }}>
        {this.state.employees.map((e, i, a) => (
          <Employee
            employee={e}
            key={i}
            updateEmployee={this.handleUpdate}
            deleteEmployee={this.props.onDeleteEmployee}
          />
        ))}
        {this.state.showUpdatePopUp ? (
          <AddEmployeeForm
            mode={ADD_EMPLOYEE_POPUP_MODE.UPDATE}
            onCancelPopup={this.toggleUpdatePopUp}
            employeeToUpdate={this.state.employeeToUpdate}
          />
        ) : null}
      </div>
    );
  }
}
