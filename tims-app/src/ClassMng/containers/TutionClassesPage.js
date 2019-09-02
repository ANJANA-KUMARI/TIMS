import { connect } from "react-redux";
import { TutionClassList } from "../components/tutionClass/TutionClassList";
import { deleteTutionClassAsync } from "../actions/tutionClassActions";

const mapStateToProps = state => ({
  tutionClasses: state.tutionClass.tutionClassList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteTutionClass: tutionClassId =>
    dispatch(deleteTutionClassAsync(tutionClassId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutionClassList);
