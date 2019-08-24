import { connect } from "react-redux";
import { SubjectList } from "../components/subjects/SubjectList";

const mapStateToProps = state => ({
  subjects: state.subjects.subjectList
});

const mapDispatchToProps = (dispatch, ownprops) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectList);
