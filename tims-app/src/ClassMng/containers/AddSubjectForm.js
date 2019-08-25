import { connect } from "react-redux";
import AddSubjectComponent from "../components/subjects/AddSubject";
import { addSubjectAsync } from "../actions/subjectActions";

const mapStateToProps = state => ({
  usedColorList: state.subjects.subjectList.map(subject => {
    return subject.color;
  })
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: subject => dispatch(addSubjectAsync(subject)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSubjectComponent);
