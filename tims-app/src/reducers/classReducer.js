import { TutionClassActionTypes } from "../ClassMng/actions/tutionClassActions";

const defaultState = {
  tutionClassList: []
};

export const tutionClass = (state = defaultState, action) => {
  switch (action.type) {
    case TutionClassActionTypes.ADD_TUTION_CLASS:
      return {
        tutionClassList: [...state.tutionClassList, action.payload]
      };
      break;
    default:
      return state;
  }
};
