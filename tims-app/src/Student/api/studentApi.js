import { API_PATH } from '../../Constants';
import axios from 'axios';

const API = `${API_PATH}/student`;

export const createStudent = student => {
  return axios.post(`${API}`, student);
};

export const getStudents = () => {
  return axios.get(`${API}`);
};

export const updateStudent = student => {
  return axios.post(`${API}/update`, student);
};

export const deleteStudent = studentId => {
  return axios.post(`${API}/delete`, { idToDelete: studentId });
};
