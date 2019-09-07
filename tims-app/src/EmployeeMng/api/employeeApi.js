import { API_PATH } from "../../Constants";
import axios from "axios";

const API = `${API_PATH}/employee`;

export const createEmployee = employee => {
  return axios.post(`${API}`, employee);
};

export const getEmployees = () => {
  return axios.get(`${API}`);
};

export const updateEmployee = employee => {
  return axios.post(`${API}/update`, employee);
};

export const deleteEmployee = employeeId => {
  return axios.post(`${API}/delete`, { idToDelete: employeeId });
};
