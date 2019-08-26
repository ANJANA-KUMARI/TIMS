import { connect } from "react-redux";
import ClassDashboard from "../components/ClassDashboard";
import { getSubjectsAsync } from "../actions/subjectActions";
const mapStateToProps = state => ({
  subjectsCount: state.subjects.subjectList.length
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  fetchSubjects: () => dispatch(getSubjectsAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDashboard);
