import { API_PATH } from "../../Constants";
import axios from "axios";

const API = `${API_PATH}/employees`;

export const createEmployee = employee => {
  return axios.post(`${API}`, employee);
};

export const getEmployees = () => {
  return axios.get(`${API}`);
};

export const getEmployeeTypes = () => {
  return axios.get(`${API}/types`);
};

export const updateEmployee = employee => {
  return axios.post(`${API}/update`, employee);
};

export const deleteEmployee = employeeId => {
  return axios.post(`${API}/delete`, { idToDelete: employeeId });
};
