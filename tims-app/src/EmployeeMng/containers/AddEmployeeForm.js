import { connect } from "react-redux";
import AddEmployeeComponent from "../components/employees/AddEmployee";
import {
  addEmployeeAsync,
  updateEmployeeAsync
} from "../actions/employeeActions";

const mapStateToProps = state => ({
  subjectList: state.subjects.subjectList,
  empTypes: state.employees.employeeTypes
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: employee => dispatch(addEmployeeAsync(employee)),
  onUpdate: employee => dispatch(updateEmployeeAsync(employee)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEmployeeComponent);
