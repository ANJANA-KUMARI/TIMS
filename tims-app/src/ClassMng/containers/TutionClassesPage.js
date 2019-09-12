import { connect } from "react-redux";
import { TutionClassList } from "../components/tutionClass/TutionClassList";
import {
  deletetutionClassAsync,
  getTutionClassAsync,
  getTeachersAsync,
  getGradesAsync,
  getTutionClassTypesAsync
} from "../actions/tutionClassActions";
import { getSubjectsAsync } from "../actions/subjectActions";

const mapStateToProps = state => ({
  tutionClasses: state.tutionClass.tutionClassList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteTutionClass: tutionClassId =>
    dispatch(deletetutionClassAsync(tutionClassId)),
  fetchData: () => {
    dispatch(getTutionClassAsync());
    dispatch(getTeachersAsync());
    dispatch(getSubjectsAsync());
    dispatch(getGradesAsync());
    dispatch(getTutionClassTypesAsync());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutionClassList);
