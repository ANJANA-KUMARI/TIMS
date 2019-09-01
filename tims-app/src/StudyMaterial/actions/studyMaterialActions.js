import {
  createStudyMaterial,
  deleteStudyMaterial,
  getStudyMaterials,
  updateStudyMaterial
} from '../api/studyMaterialApi';

export const StudyMaterialActionTypes = {
  ADD_STUDY_MATERIAL: 'ADD_STUDY_MATERIAL',
  UPDATE_STUDY_MATERIAL: 'UPDATE_STUDY_MATERIAL',
  DELETE_STUDY_MATERIAL: 'DELETE_STUDY_MATERIAL',
  STUDY_MATERIALS_LOADED: 'STUDY_MATERIALS_LOADED'
};

// action creators

const studyMaterialAdded = studyMaterial => ({
  type: StudyMaterialActionTypes.ADD_STUDY_MATERIAL,
  payload: studyMaterial
});

const studyMaterialLoaded = studyMaterials => ({
  type: StudyMaterialActionTypes.STUDY_MATERIALS_LOADED,
  payload: studyMaterials
});

const studyMaterialUpdated = updatedSubject => ({
  type: StudyMaterialActionTypes.UPDATE_STUDY_MATERIAL,
  payload: updatedSubject
});

const studyMaterialDeleted = studyMaterialId => ({
  type: StudyMaterialActionTypes.DELETE_STUDY_MATERIAL,
  payload: studyMaterialId
});

// asyc actions
export const addStudyMaterialAsync = studyMaterialFormData => {
  return async function(dispatch, getState) {
    try {
      const result = await createStudyMaterial(studyMaterialFormData);
      dispatch(studyMaterialAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getStudyMaterialsAsync = () => {
  return async function(dispatch, getState) {
    try {
      const studyMaterials = await getStudyMaterials();
      dispatch(studyMaterialLoaded(studyMaterials.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const updateStudyMaterialAsync = studyMaterial => {
  return async function(dispatch, getState) {
    try {
      const updatedSubject = await updateStudyMaterial(studyMaterial);
      dispatch(studyMaterialUpdated(updatedSubject.data));
    } catch (err) {}
  };
};

export const deleteStudyMaterialAsync = studyMaterialId => {
  return async function(dispatch, getState) {
    try {
      const result = await deleteStudyMaterial(studyMaterialId);
      if (result.data) {
        dispatch(studyMaterialDeleted(studyMaterialId));
      } else {
        console.log('ERROR DELETING STUDY_MATERIAL.');
      }
    } catch (err) {
      console.log('ERROR DELETING STUDY_MATERIAL.');
    }
  };
};
