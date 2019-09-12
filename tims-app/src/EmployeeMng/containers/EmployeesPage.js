import { connect } from "react-redux";
import { EmployeeList } from "../components/employees/EmployeeList";
import {
  deleteEmployeeAsync,
  getEmployeesAsync,
  getEmployeeTypesAsync
} from "../actions/employeeActions";
import { getSubjectsAsync } from "../../ClassMng/actions/subjectActions";

const mapStateToProps = state => ({
  employees: state.employees.employeeList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteEmployee: employeeId => dispatch(deleteEmployeeAsync(employeeId)),
  fetchData: () => {
    dispatch(getEmployeesAsync());
    dispatch(getSubjectsAsync());
    dispatch(getEmployeeTypesAsync());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
