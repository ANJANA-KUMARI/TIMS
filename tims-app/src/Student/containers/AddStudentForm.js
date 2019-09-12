import { connect } from 'react-redux';
import AddStudentComponent from '../components/AddStudent';
import { addStudentAsync, updateStudentAsync } from '../actions/studentActions';

const mapStateToProps = state => ({
  tutionClasses: state.tutionClass.tutionClassList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: student => dispatch(addStudentAsync(student)),
  onUpdate: studyMaterial => dispatch(updateStudentAsync(studyMaterial)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentComponent);
