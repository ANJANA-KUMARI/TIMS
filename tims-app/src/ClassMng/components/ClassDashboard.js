import React, { Component } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import '../ClassMng.css';
import AddSubject from './AddSubject';

class ClassDashboard extends Component {
  state = {
    showAddSubjectForm: false
  };

  toggleAddSubjectForm = () => {
    console.log('Yaluuuuuuuuuuuuuu);');
    this.setState({
      showAddSubjectForm: !this.state.showAddSubjectForm
    });
  };

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
            subheader="6"
          />
        </Card>

        <Card className="class-dashboard-shortcut">
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/class.svg" />
              </Avatar>
            }
            title="Classes"
            subheader="10"
          />
        </Card>

        <Card className="class-dashboard-shortcut">
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/class.svg" />
              </Avatar>
            }
            title="Add Subject"
          />
        </Card>

        <Card
          onClick={this.toggleAddSubjectForm}
          className="class-dashboard-shortcut"
        >
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/class.svg" />
              </Avatar>
            }
            title="Add Class"
          />
        </Card>

        {this.state.showAddSubjectForm ? (
          <AddSubject onCancelPopup={this.toggleAddSubjectForm} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ClassDashboard;
