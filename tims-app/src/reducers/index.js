import { combineReducers } from "redux";
import { subjects } from "./subjectReducer";
import { tutionClass } from "./classReducer";
import { ui } from "./uiReducer";
import { studyMaterials } from "./studyMaterialReducer";
import { employees } from "./employeeReducer";

export default combineReducers({
  subjects,
  tutionClass,
  ui,
  studyMaterials,
  employees
});
