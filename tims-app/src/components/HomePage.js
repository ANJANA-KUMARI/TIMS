import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ROUTE_PATHS } from '../Constants';
import DashboardCard from './DashboardCard';

export default function HomePage() {

    const dashboardCards = [
        {
            id: 1,
            image: "/image/classes.svg",
            title: "Classes",
            page: ROUTE_PATHS.CLASSES
        },
        {
            id: 2,
            image: "/image/classes.svg",
            title: "Attendance",
            page: ROUTE_PATHS.ATTENDENCE
        },
        {
            id: 3,
            image: "/image/classes.svg",
            title: "Students",
            page: ROUTE_PATHS.STUDENTS
        },
        {
            id: 4,
            image: "/image/classes.svg",
            title: "Employees",
            page: ROUTE_PATHS.EMPLOYEES
        },
        {
            id: 5,
            image: "/image/classes.svg",
            title: "Parents",
            page: ROUTE_PATHS.PARENTS
        },
        {
            id: 6,
            image: "/image/classes.svg",
            title: "Fee",
            page: ROUTE_PATHS.FEE
        },

        {
            id: 7,
            image: "/image/classes.svg",
            title: "TimeTable",
            page: ROUTE_PATHS.TIMETABLE
        },
        {
            id: 8,
            image: "/image/classes.svg",
            title: "Study Material",
            page: ROUTE_PATHS.STUDY_MATERIAL
        }
    ]

    const DashboardItemListStyle = {
        innerWrap: {

            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            padding: "20px",
            width: '100%'
        },
        outerWrap: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <div style={DashboardItemListStyle.outerWrap}>

            <div style={DashboardItemListStyle.innerWrap}>
                {
                    dashboardCards.map((dashboardCard) => {
                        return <DashboardCard key={dashboardCard.id} image={dashboardCard.image} title={dashboardCard.title} page={dashboardCard.page} />
                    })
                }
            </div>
        </div>

    );
}

