import { createSubject, getSubjects } from "../api/subjectApi";

export const SubjectActionTypes = {
  ADD_SUBJECT: "ADD_SUBJECT",
  UPDATE_SUBJECT: "UPDATE_SUBJECT",
  DELETE_SUBJECT: "DELETE_SUBJECT"
};

// action creators

const subjectAdded = subject => ({
  type: SubjectActionTypes.ADD_SUBJECT,
  payload: subject
});

const subjectUpdated = updatedSubject => ({
  type: SubjectActionTypes.UPDATE_SUBJECT,
  payload: updatedSubject
});

const subjectDeleted = subjectId => ({
  type: SubjectActionTypes.DELETE_SUBJECT,
  payload: subjectId
});

// asyc actions
export const addSubjectAsync = subject => {
  return async function(dispatch, getState) {
    try {
      const result = await createSubject(subject);
      dispatch(subjectAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getSubjectsAsync = () => {
  return async function(dispatch, getState) {
    try {
      const subjects = await getSubjects();
      subjects.data.forEach(subject => {
        dispatch(subjectAdded(subject));
      });
    } catch (err) {
      // TODO : error
    }
  };
};

export const updateSubjectAsync = () => {
  return async function(dispatch, getState) {
    try {
    } catch (err) {}
  };
};

export const deleteSubjectAsync = () => {
  return async function(dispatch, getState) {
    try {
    } catch (err) {}
  };
};
