import { connect } from 'react-redux';
import AddStudyMaterialComponent from '../components/AddStudyMaterial';
import {
  addStudyMaterialAsync,
  updateStudyMaterialAsync
} from '../actions/studyMaterialActions';

const mapStateToProps = state => ({
  tutionClasses: state.tutionClass.tutionClassList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: studyMaterialFormData =>
    dispatch(addStudyMaterialAsync(studyMaterialFormData)),
  onUpdate: studyMaterial => dispatch(updateStudyMaterialAsync(studyMaterial)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudyMaterialComponent);
