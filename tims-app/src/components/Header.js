import React, { Component } from 'react';
import "./header.css";

const HeaderLogo = () => (
    <div className="header-logo">
        <img src="https://www.powerslaw.com/wp-content/uploads/2017/10/U.S.-Dept-Ed.jpg" />
    </div>

);

class HeaderProfile extends Component {

    state = {
        isMenuOpened: false
    }

    handleClick = () => {
        this.setState(
            {
                isMenuOpened: !this.state.isMenuOpened
            }
        )
    }

    render() {
        return (
            <div className="header-profile">
                <div onClick={this.handleClick} className="user-wrap">
                    <div className="user-image">
                        <img src={this.props.image} />
                    </div>
                    <span style={{ color: "#ffffff" }}>
                        {this.props.name}
                    </span>
                    <span>
                        <img src="./image/down.png" style={{ width: "15px", margin: "0px 10px" }} />
                    </span>
                </div>

                <div className={this.state.isMenuOpened ? "shadow user-menu menu-opened " : "shadow user-menu "}>
                    <a href="#">Profile</a>
                    <a href="#">Setting</a>
                    <a href="#">LogOut</a>
                </div>
            </div>
        )
    }
}


class Header extends Component {

    users = [{
        image: "https://banner2.kisspng.com/20180630/ltq/kisspng-computer-icons-user-avatar-clip-art-skincare-cartoon-5b371025a6d8a7.5354815915303352696834.jpg",
        name: "Yalu"
    },
    {
        image: "https://cdn.imgbin.com/15/3/18/imgbin-computer-icons-woman-avatar-avatar-girl-TBWeJMyXNwtNQA661FQ0rZSv2.jpg",
        name: "Malu"
    }]

    state = {}
    render() {
        return (
            <div className="header-wrap">
                <HeaderLogo />
                <HeaderProfile image={this.users[0].image} name={this.users[0].name} />
            </div>
        );
    }
}

export default Header;