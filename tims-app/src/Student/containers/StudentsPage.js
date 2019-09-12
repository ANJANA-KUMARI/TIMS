import { connect } from 'react-redux';
import { StudentDashboard } from '../components/StudentDashboard';
import {
  deleteStudentAsync,
  getStudentsAsync
} from '../actions/studentActions';
import {
  getTutionClassAsync,
  getTeachersAsync
} from '../../ClassMng/actions/tutionClassActions';
import { getSubjectsAsync } from '../../ClassMng/actions/subjectActions';

const mapStateToProps = state => ({
  students: state.students.studentList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteStudent: studentId => dispatch(deleteStudentAsync(studentId)),
  fetchData: () => {
    dispatch(getStudentsAsync());
    dispatch(getTutionClassAsync());
    dispatch(getSubjectsAsync());
    dispatch(getTeachersAsync());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDashboard);
