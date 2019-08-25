import { createTutionClass, getTutionClass } from "../api/tutionClassApi";

export const TutionClassActionTypes = {
  ADD_TUTION_CLASS: "ADD_TUTION_CLASS",
  UPDATE_TUTION_CLASS: "UPDATE_TUTION_CLASS",
  DELETE_TUTION_CLASS: "DELETE_TUTION_CLASS"
};

// action creators

const tutionClassAdded = tutionClass => ({
  type: TutionClassActionTypes.ADD_TUTION_CLASS,
  payload: tutionClass
});

const tutionClassUpdated = updatedtutionClass => ({
  type: TutionClassActionTypes.UPDATE_TUTION_CLASS,
  payload: updatedtutionClass
});

const tutionClassDeleted = tutionClassId => ({
  type: TutionClassActionTypes.DELETE_TUTION_CLASS,
  payload: tutionClassId
});

// asyc actions
export const addTutionClassAsync = tutionClass => {
  return async function(dispatch, getState) {
    try {
      const result = await createTutionClass(tutionClass);
      dispatch(tutionClassAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const gettutionClasssAsync = () => {
  return async function(dispatch, getState) {
    try {
      const tutionClasss = await getTutionClass();
      tutionClasss.data.forEach(tutionClass => {
        dispatch(tutionClassAdded(tutionClass));
      });
    } catch (err) {
      // TODO : error
    }
  };
};

export const updatetutionClassAsync = () => {
  return async function(dispatch, getState) {
    try {
    } catch (err) {}
  };
};

export const deletetutionClassAsync = () => {
  return async function(dispatch, getState) {
    try {
    } catch (err) {}
  };
};
