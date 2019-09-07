import { EmployeeActionTypes } from "../EmployeeMng/actions/employeeActions";

const defaultState = {
  employeeList: []
};

export const employees = (state = defaultState, action) => {
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return {
        employeeList: [...state.employeeList, action.payload]
      };

    case EmployeeActionTypes.DELETE_EMPLOYEE:
      const newEmployeeList = state.employeeList.slice();
      const indexToDelete = newEmployeeList.findIndex(
        s => s.id === action.payload
      );
      newEmployeeList.splice(indexToDelete, 1);
      return {
        employeeList: [...newEmployeeList]
      };

    case EmployeeActionTypes.EMPLOYEES_LOADED:
      return {
        employeeList: [...action.payload]
      };

    case EmployeeActionTypes.UPDATE_EMPLOYEE:
      const newUpdatedEmployeeList = state.employeeList.slice();
      const indexToUpdate = newUpdatedEmployeeList.findIndex(
        s => s.id === action.payload.id
      );
      newUpdatedEmployeeList[indexToUpdate] = action.payload;
      return {
        employeeList: [...newUpdatedEmployeeList]
      };
    default:
      return state;
  }
};
