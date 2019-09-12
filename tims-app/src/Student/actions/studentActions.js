import {
  createStudent,
  getStudents,
  deleteStudent,
  updateStudent
} from '../api/studentApi';

export const StudentActionTypes = {
  ADD_STUDENT: 'ADD_STUDENT',
  UPDATE_STUDENT: 'UPDATE_STUDENT',
  DELETE_STUDENT: 'DELETE_STUDENT',
  STUDENTS_LOADED: 'STUDENTS_LOADED'
};

// action creators

const studentAdded = student => ({
  type: StudentActionTypes.ADD_STUDENT,
  payload: student
});

const studentLoaded = students => ({
  type: StudentActionTypes.STUDENTS_LOADED,
  payload: students
});

const studentUpdated = updatedStudent => ({
  type: StudentActionTypes.UPDATE_STUDENT,
  payload: updatedStudent
});

const studentDeleted = studentId => ({
  type: StudentActionTypes.DELETE_STUDENT,
  payload: studentId
});

// asyc actions
export const addStudentAsync = student => {
  return async function(dispatch, getState) {
    try {
      const result = await createStudent(student);
      dispatch(studentAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getStudentsAsync = () => {
  return async function(dispatch, getState) {
    try {
      const students = await getStudents();
      dispatch(studentLoaded(students.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const updateStudentAsync = student => {
  return async function(dispatch, getState) {
    try {
      const updatedStudent = await updateStudent(student);
      dispatch(studentUpdated(updatedStudent.data));
    } catch (err) {}
  };
};

export const deleteStudentAsync = studentId => {
  return async function(dispatch, getState) {
    try {
      const result = await deleteStudent(studentId);
      if (result.data) {
        dispatch(studentDeleted(studentId));
      } else {
        console.log('ERROR DELETING STUDENT.');
      }
    } catch (err) {
      console.log('ERROR DELETING STUDENT.');
    }
  };
};
