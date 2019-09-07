import { TutionClassActionTypes } from "../ClassMng/actions/tutionClassActions";

const defaultState = {
  tutionClassList: [],
  gradeList: [],
  tutionClassTypeList: [],
  teacherList: []
};

export const tutionClass = (state = defaultState, action) => {
  switch (action.type) {
    case TutionClassActionTypes.ADD_TUTION_CLASS:
      return {
        ...state,
        tutionClassList: [...state.tutionClassList, action.payload]
      };
    case TutionClassActionTypes.GRADES_LOADED:
      return {
        ...state,
        gradeList: action.payload
      };
    case TutionClassActionTypes.TYPES_LOADED:
      return {
        ...state,
        tutionClassTypeList: action.payload
      };
    case TutionClassActionTypes.TEACHERS_LOADED:
      return {
        ...state,
        teacherList: action.payload
      };

    case TutionClassActionTypes.DELETE_TUTION_CLASS:
      const newTutionClassList = state.tutionClassList.slice();
      const indexToDelete = newTutionClassList.findIndex(
        c => c.id === action.payload
      );
      newTutionClassList.splice(indexToDelete, 1);
      return {
        ...state,
        tutionClassList: newTutionClassList
      };

    case TutionClassActionTypes.UPDATE_TUTION_CLASS:
      const newUpdatedTutionClassList = state.TutionClassList.slice();
      const indexToUpdate = newUpdatedTutionClassList.findIndex(
        c => c.id === action.payload.id
      );
      newUpdatedTutionClassList[indexToUpdate] = action.payload;
      return {
        ...state,
        tutionClassList: newUpdatedTutionClassList
      };

    case TutionClassActionTypes.TUTION_CLASS_LOADED:
      return {
        ...state,
        tutionClassList: action.payload
      };

    default:
      return state;
  }
};
