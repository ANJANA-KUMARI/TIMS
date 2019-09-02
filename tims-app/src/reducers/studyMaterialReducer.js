import { StudyMaterialActionTypes } from '../StudyMaterial/actions/studyMaterialActions';

const defaultState = {
  studyMaterialList: []
};

export const studyMaterials = (state = defaultState, action) => {
  switch (action.type) {
    case StudyMaterialActionTypes.ADD_STUDY_MATERIAL:
      return {
        studyMaterialList: [...state.studyMaterialList, action.payload]
      };

    case StudyMaterialActionTypes.DELETE_STUDY_MATERIAL:
      const newStudyMatList = state.studyMaterialList.slice();
      const indexToDelete = newStudyMatList.findIndex(
        s => s.id === action.payload
      );
      newStudyMatList.splice(indexToDelete, 1);
      return {
        studyMaterialList: [...newStudyMatList]
      };

    case StudyMaterialActionTypes.STUDY_MATERIALS_LOADED:
      return {
        studyMaterialList: action.payload
      };

    case StudyMaterialActionTypes.UPDATE_STUDY_MATERIAL:
      const newUpdatedSubjectList = state.studyMaterialList.slice();
      const indexToUpdate = newUpdatedSubjectList.findIndex(
        s => s.id === action.payload.id
      );
      newUpdatedSubjectList[indexToUpdate] = action.payload;

      return {
        studyMaterialList: [...newUpdatedSubjectList]
      };
    default:
      return state;
  }
};
