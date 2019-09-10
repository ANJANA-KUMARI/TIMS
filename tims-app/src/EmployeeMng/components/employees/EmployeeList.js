import React, { Component } from 'react';
import Employee from './Employee';
import AddEmployeeForm from '../../containers/AddEmployeeForm';
import { ADD_EMPLOYEE_POPUP_MODE } from './AddEmployee';

export class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }

  state = {
    showUpdatePopUp: false,
    tutionClassToUpdate: null,
    employees: this.props.employees
  };

  toggleUpdatePopUp = () => {
    this.setState({
      showUpdatePopUp: !this.state.showUpdatePopUp
    });
  };

  handleUpdate = tutionClass => {
    this.toggleUpdatePopUp();
    this.setState({
      tutionClassToUpdate: tutionClass
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      tutionClasses: nextProps.tutionClasses
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', padding: '20px', flexWrap: 'wrap' }}>
        {this.state.tutionClasses.map((t, i, a) => (
          <TutionClass
            tutionClass={t}
            key={i}
            updateTutionClass={this.handleUpdate}
            deleteTutionClass={this.props.onDeleteTutionClass}
          />
        ))}
        {this.state.showUpdatePopUp ? (
          <AddTutionClassForm
            mode={ADD_TUTIONCLASS_POPUP_MODE.UPDATE}
            onCancelPopup={this.toggleUpdatePopUp}
            tutionClassToUpdate={this.state.tutionClassToUpdate}
          />
        ) : null}
      </div>
    );
  }
}
