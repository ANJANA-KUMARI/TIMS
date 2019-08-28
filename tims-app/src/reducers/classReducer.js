import { TutionClassActionTypes } from "../ClassMng/actions/tutionClassActions";

const defaultState = {
  tutionClassList: [],
  gradeList: [],
  tutionClassTypeList: []
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
    default:
      return state;
  }
};
