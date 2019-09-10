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
    // CHECK MALU, here I renamed the function name to fetchData malu, and I added { } to this arrow function, so we can call multiple dispatch() malu
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
