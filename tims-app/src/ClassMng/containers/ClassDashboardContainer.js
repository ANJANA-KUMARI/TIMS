import { connect } from "react-redux";
import ClassDashboard from "../components/ClassDashboard";
import { getSubjectsAsync } from "../actions/subjectActions";
import {
  getGradesAsync,
  getTutionClassTypesAsync,
  getTeachersAsync,
  getTutionClassAsync
} from "../actions/tutionClassActions";

const mapStateToProps = state => ({
  subjectsCount: state.subjects.subjectList.length,
  tutionClassesCount: state.tutionClass.tutionClassList.length
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  fetchSubjects: () => dispatch(getSubjectsAsync()),
  fetchGrades: () => dispatch(getGradesAsync()),
  fetchTutionClassTypes: () => dispatch(getTutionClassTypesAsync()),
  fetchTeachers: () => dispatch(getTeachersAsync()),
  fetchTutionClasses: () => dispatch(getTutionClassAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDashboard);
