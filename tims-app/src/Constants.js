export const ROUTE_PATHS = {
  CLASS_DASHBOARD: '/classes-dashboard/',
  TUTION_CLASS: '/tution-class/',
  SUBJECTS: '/subjects/',
  ATTENDENCE: '/attendance/',
  STUDENTS: '/students/',
  EMPLOYEES: '/employees/',
  PARENTS: '/parents/',
  FEE: '/fee/',
  TIMETABLE: '/timetable/',
  STUDY_MATERIAL: '/study-material/',
  HOMEPAGE: '/'
};

export const ROUTE_DASHBOARD_TITLES = [
  { path: ROUTE_PATHS.HOMEPAGE, title: 'Dashboard' },
  { path: ROUTE_PATHS.CLASS_DASHBOARD, title: 'Class dashboard' },
  { path: ROUTE_PATHS.TUTION_CLASS, title: 'Tution classes' },
  { path: ROUTE_PATHS.SUBJECTS, title: 'Subjects' },
  { path: ROUTE_PATHS.ATTENDENCE, title: 'Attendance' }
];
export const API_PATH = 'http://localhost:5000/v1';
