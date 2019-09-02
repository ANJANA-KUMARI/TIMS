import { API_PATH } from '../../Constants';
import axios from 'axios';

const API = `${API_PATH}/studymat`;

export const createStudyMaterial = StudyMaterialFormData => {
  return axios.post(`${API}`, StudyMaterialFormData);
};

export const getStudyMaterials = () => {
  return axios.get(`${API}`);
};

export const updateStudyMaterial = StudyMaterial => {
  return axios.post(`${API}/update`, StudyMaterial);
};

export const deleteStudyMaterial = StudyMaterialId => {
  return axios.post(`${API}/delete`, { idToDelete: StudyMaterialId });
};
