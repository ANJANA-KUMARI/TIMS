import { StudentActionTypes } from '../Student/actions/studentActions';

const defaultState = {
  studentList: []
};

export const students = (state = defaultState, action) => {
  switch (action.type) {
    case StudentActionTypes.ADD_STUDENT:
      return {
        studentList: [...state.studentList, action.payload]
      };

    case StudentActionTypes.DELETE_STUDENT:
      const newStudentList = state.studentList.slice();
      const indexToDelete = newStudentList.findIndex(
        s => s.id === action.payload
      );
      newStudentList.splice(indexToDelete, 1);
      return {
        studentList: [...newStudentList]
      };

    case StudentActionTypes.STUDENTS_LOADED:
      return {
        studentList: [...action.payload]
      };

    case StudentActionTypes.UPDATE_STUDENT:
      const newUpdatedStudentList = state.studentList.slice();
      const indexToUpdate = newUpdatedStudentList.findIndex(
        s => s.id === action.payload.id
      );
      newUpdatedStudentList[indexToUpdate] = action.payload;
      return {
        studentList: [...newUpdatedStudentList]
      };
    default:
      return state;
  }
};
