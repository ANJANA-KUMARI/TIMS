import { connect } from 'react-redux';
import studyMatDashboard from '../components/StudyMaterialDashboard';
import {
  getStudyMaterialsAsync,
  deleteStudyMaterialAsync
} from '../actions/studyMaterialActions';
import { getSubjectsAsync } from '../../ClassMng/actions/subjectActions';
import {
  getGradesAsync,
  getTeachersAsync,
  getTutionClassAsync,
  getTutionClassTypesAsync
} from '../../ClassMng/actions/tutionClassActions';

const mapStateToProps = state => ({
  studyMaterials: state.studyMaterials.studyMaterialList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  deleteStudyMaterial: id => dispatch(deleteStudyMaterialAsync(id)),
  fetchStudyMaterials: () => dispatch(getStudyMaterialsAsync()),
  fetchTutionClasses: () => dispatch(getTutionClassAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(studyMatDashboard);
