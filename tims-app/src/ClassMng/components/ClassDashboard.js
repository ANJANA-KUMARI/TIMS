import React, { Component } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import "../ClassMng.css";

class ClassDashboard extends Component {
    state = {}
    render() {
        return (
            <div className="shortcut-wrap">
                <Card className="class-dashboard-shortcut">
                    <CardHeader
                        avatar={
                            <Avatar>
                                <img className="w-100" src="/image/subject.svg" />
                            </Avatar>
                        }
                        title="Subjects"
                        subheader="6">
                    </CardHeader>
                </Card>

                <Card className="class-dashboard-shortcut">
                    <CardHeader
                        avatar={
                            <Avatar>
                                <img className="w-100 h-100" src="/image/class.svg" />
                            </Avatar>
                        }
                        title="Classes"
                        subheader="10">
                    </CardHeader>
                </Card>

                <Card className="class-dashboard-shortcut">
                    <CardHeader
                        avatar={
                            <Avatar>
                                <img className="w-100 h-100" src="/image/class.svg" />
                            </Avatar>
                        }
                        title="Add Subject"
                        subheader="10">
                    </CardHeader>
                </Card>

            </div>
        );
    }
}

export default ClassDashboard;