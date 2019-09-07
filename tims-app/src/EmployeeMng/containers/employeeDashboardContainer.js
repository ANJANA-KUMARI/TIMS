import { connect } from "react-redux";
import EmployeeDashboard from "../components/EmployeeDashboard";
import { getSubjectsAsync } from "../../ClassMng/actions/subjectActions";
import { getEmployeesAsync } from "../actions/employeeActions";

const mapStateToProps = state => ({
  employeesCount: state.employees.employeeList.length
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  fetchSubjects: () => dispatch(getSubjectsAsync()),
  fetchEmployees: () => dispatch(getEmployeesAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDashboard);
