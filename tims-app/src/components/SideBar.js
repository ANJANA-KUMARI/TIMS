import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from '../Constants';


class SideBar extends Component {

    menuItems = [
        {
            id: 1,
            icon: "https://img.icons8.com/ultraviolet/80/000000/class.png",
            title: "Classes",
            url: ROUTE_PATHS.CLASSES
        },
        {
            id: 2,
            icon: "https://img.icons8.com/color/48/000000/attendance-mark.png",
            title: "Attendance",
            url: "/attendance/"
        },
        {
            id: 3,
            icon: "https://img.icons8.com/ultraviolet/40/000000/students.png",
            title: "Students",
            url: "/students/"
        },
        {
            id: 4,
            icon: "https://img.icons8.com/ultraviolet/40/000000/employee-card.png",
            title: "Employees",
            url: "/employees/"
        },
        {
            id: 5,
            icon: "https://img.icons8.com/ultraviolet/40/000000/parent-guardian.png",
            title: "Parents",
            url: "/parents  /"
        },
        {
            id: 6,
            icon: "https://img.icons8.com/ultraviolet/40/000000/no-hidden-fee.png",
            title: "Fee",
            url: "/fee/"
        },
        {
            id: 7,
            icon: "https://img.icons8.com/ultraviolet/40/000000/planner.png",
            title: "TimeTable",
            url: "/timetable/"
        },
        {
            id: 8,
            icon: "https://img.icons8.com/ultraviolet/40/000000/saving-book.png",
            title: "Study Material",
            url: "/study-material/"
        }

    ]
    render() {
        return (
            <div style={{ height: "100%" }}>
                {
                    this.menuItems.map((menuItem) => {
                        return <SideBarItem key={menuItem.id} icon={menuItem.icon} title={menuItem.title} url={menuItem.url} color={menuItem.color} />
                    })
                }

            </div>
        );
    }
}

const SideBarItem = ({ icon, title, url }) => (
    <Link style={sideBarMenuItemStyle().a} to={url} className="side-menu-item">
        <div style={sideBarMenuItemStyle().wrap}>
            <span >
                <img style={sideBarMenuItemStyle().icon} src={icon}></img>
            </span>
            <div>
                <span style={sideBarMenuItemStyle().title}>{title}</span>
            </div>
        </div>
    </Link>
)

const sideBarMenuItemStyle = (color) => {

    return {
        a: {
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            width: "100%",
            height: "12.5%",
            fontSize: "13px",
        },
        title: {
            color: "black"
        },
        wrap: {
            textAlign: "center",
            backgroundColor: color ? color : "",
            height: "100%",
            maxHeight: "100%",
            boxSizing: "border-box",
            borderBottom: "1px solid #f6f6f6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "3px 3px 5px #ddd"
        },
        icon: {
            width: "30px",
            height: "30px"
        }
    }

}


export default SideBar;