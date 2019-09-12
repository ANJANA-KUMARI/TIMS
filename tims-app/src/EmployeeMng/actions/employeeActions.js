import {
  createEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeTypes
} from "../api/employeeApi";

export const EmployeeActionTypes = {
  ADD_EMPLOYEE: "ADD_EMLOYEE",
  UPDATE_EMPLOYEE: "UPDATE_EMLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMLOYEE",
  EMPLOYEES_LOADED: "EMLOYEES_LOADED",
  TYPES_LOADED: "TYPES_LOADED"
};

// action creators

const employeeAdded = employee => ({
  type: EmployeeActionTypes.ADD_EMPLOYEE,
  payload: employee
});

const employeeLoaded = employees => ({
  type: EmployeeActionTypes.EMPLOYEES_LOADED,
  payload: employees
});

const employeeUpdated = updatedEmployee => ({
  type: EmployeeActionTypes.UPDATE_EMPLOYEE,
  payload: updatedEmployee
});

const employeeDeleted = employeeId => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE,
  payload: employeeId
});

const employeeTypeLoaded = types => ({
  type: EmployeeActionTypes.TYPES_LOADED,
  payload: types
});

// asyc actions
export const addEmployeeAsync = employee => {
  return async function(dispatch, getState) {
    try {
      const result = await createEmployee(employee);
      dispatch(employeeAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getEmployeesAsync = () => {
  return async function(dispatch, getState) {
    try {
      const employees = await getEmployees();
      dispatch(employeeLoaded(employees.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const updateEmployeeAsync = employee => {
  return async function(dispatch, getState) {
    try {
      const updatedEmployee = await updateEmployee(employee);
      dispatch(employeeUpdated(updatedEmployee.data));
    } catch (err) {}
  };
};

export const deleteEmployeeAsync = employeeId => {
  return async function(dispatch, getState) {
    try {
      const result = await deleteEmployee(employeeId);
      if (result.data) {
        dispatch(employeeDeleted(employeeId));
      } else {
        console.log("ERROR DELETING EMPLOYEE.");
      }
    } catch (err) {
      console.log("ERROR DELETING EMPLOYEE.");
    }
  };
};

export const getEmployeeTypesAsync = () => {
  return async function(dispatch, getState) {
    try {
      const types = await getEmployeeTypes();
      dispatch(employeeTypeLoaded(types.data));
    } catch (err) {
      // TODO : error
    }
  };
};
