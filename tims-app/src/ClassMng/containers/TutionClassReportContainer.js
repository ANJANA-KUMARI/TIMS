import { connect } from "react-redux";
import {
  getTutionClassAsync,
  getTeachersAsync,
  getGradesAsync,
  getTutionClassTypesAsync
} from "../actions/tutionClassActions";
import { getSubjectsAsync } from "../actions/subjectActions";
import TutionClassReport from "../components/tutionClass/TutionClassReport";

const mapStateToProps = state => ({
  tutionClasses: state.tutionClass.tutionClassList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
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
)(TutionClassReport);
