import { connect } from "react-redux";
import ClassDashboard from "../components/ClassDashboard";
import { getSubjectsAsync } from "../actions/subjectActions";
import {
  getGradesAsync,
  getTutionClassTypesAsync
} from "../actions/tutionClassActions";

const mapStateToProps = state => ({
  subjectsCount: state.subjects.subjectList.length
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  fetchSubjects: () => dispatch(getSubjectsAsync()),
  fetchGrades: () => dispatch(getGradesAsync()),
  fetchTutionClassTypes: () => dispatch(getTutionClassTypesAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDashboard);
