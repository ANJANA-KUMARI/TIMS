import { connect } from "react-redux";
import { TutionClassList } from "../components/tutionClass/TutionClassList";
import {
  deletetutionClassAsync,
  getTutionClassAsync
} from "../actions/tutionClassActions";

const mapStateToProps = state => ({
  tutionClasses: state.tutionClass.tutionClassList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteTutionClass: tutionClassId =>
    dispatch(deletetutionClassAsync(tutionClassId)),
  fetchTutionClasses: () => dispatch(getTutionClassAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutionClassList);
