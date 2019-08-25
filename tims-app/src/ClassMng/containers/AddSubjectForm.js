import { connect } from "react-redux";
import AddSubjectComponent from "../components/subjects/AddSubject";
import { addSubjectAsync } from "../actions/subjectActions";

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: subject => dispatch(addSubjectAsync(subject)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  null,
  mapDispatchToProps
)(AddSubjectComponent);
