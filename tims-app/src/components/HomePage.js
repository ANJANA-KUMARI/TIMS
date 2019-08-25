<<<<<<< HEAD
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ROUTE_PATHS } from "../Constants";
import DashboardCard from "./DashboardCard";
=======
import React from 'react';
import { ROUTE_PATHS } from '../Constants';
import DashboardCard from './DashboardCard';
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b

export default function HomePage() {
  const dashboardCards = [
    {
      id: 1,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "Classes",
      page: ROUTE_PATHS.CLASS_DASHBOARD
    },
    {
      id: 2,
      image: "/image/classes.svg",
      title: "Attendance",
=======
      image: '/image/classes.svg',
      title: 'Classes',
      page: ROUTE_PATHS.CLASSES
    },
    {
      id: 2,
      image: '/image/attendance.svg',
      title: 'Attendance',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.ATTENDENCE
    },
    {
      id: 3,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "Students",
=======
      image: '/image/student.svg',
      title: 'Students',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.STUDENTS
    },
    {
      id: 4,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "Employees",
=======
      image: '/image/employee.svg',
      title: 'Employees',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.EMPLOYEES
    },
    {
      id: 5,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "Parents",
=======
      image: '/image/parent.svg',
      title: 'Parents',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.PARENTS
    },
    {
      id: 6,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "Fee",
=======
      image: '/image/fee.svg',
      title: 'Fee',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.FEE
    },

    {
      id: 7,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "TimeTable",
=======
      image: '/image/timetable.svg',
      title: 'TimeTable',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.TIMETABLE
    },
    {
      id: 8,
<<<<<<< HEAD
      image: "/image/classes.svg",
      title: "Study Material",
=======
      image: '/image/studyMat.svg',
      title: 'Study Material',
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
      page: ROUTE_PATHS.STUDY_MATERIAL
    }
  ];

  const DashboardItemListStyle = {
    innerWrap: {
<<<<<<< HEAD
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
      padding: "20px",
      width: "100%"
    },
    outerWrap: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
=======
      display: 'grid',
      gridTemplateColumns: '25% 25% 25% 25%',
      padding: '20px',
      width: '100%'
    },
    outerWrap: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
>>>>>>> 374cdfe8b9b0a6d304eae30a48c726783d8e245b
    }
  };

  return (
    <div style={DashboardItemListStyle.outerWrap}>
      <div style={DashboardItemListStyle.innerWrap}>
        {dashboardCards.map(dashboardCard => {
          return (
            <DashboardCard
              key={dashboardCard.id}
              image={dashboardCard.image}
              title={dashboardCard.title}
              page={dashboardCard.page}
            />
          );
        })}
      </div>
    </div>
  );
}
