import { connect } from 'react-redux';
import { EmployeeList } from '../components/employees/EmployeeList';
import {
  deleteEmployeeAsync,
  getEmployeeAsync
} from '../actions/employeeActions';
import { getSubjectsAsync } from '../actions/subjectActions';

const mapStateToProps = state => ({
  employees: state.employee.employeeList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteEmployee: employeeId => dispatch(deleteEmployeeAsync(employeeId)),
  fetchData: () => {
    dispatch(getEmployeeAsync());
    dispatch(getSubjectsAsync());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
