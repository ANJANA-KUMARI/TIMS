import React, { Component } from 'react';
import '../../StudyMaterial/studyMaterials.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Card,
  CardHeader,
  CardContent,
  Icon,
  IconButton
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { DeleteRounded, EditRounded } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';

import AddStudentForm from '../containers/AddStudentForm';

export class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAddStudentForm: false
    };
    this.props.fetchData();
  }

  toggleAddStudentForm = () => {
    this.setState({
      displayAddStudentForm: !this.state.displayAddStudentForm
    });
    console.log('====================================');
    console.log('setted state');
    console.log('====================================');
  };
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.toggleAddStudentForm();
            }}
          >
            Add new student
          </Button>
        </div>
        <div>
          {this.props.students.map((student, i, a) => (
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <div className="w-100 d-flex justify-content-between">
                  <Typography>{`${student.firstName}  ${student.lastName}`}</Typography>
                  <div>{student.email}</div>

                  <div className="d-flex">
                    <div className="mr-3">
                      <span>{`${student.tutionClasses.length} classes`}</span>
                    </div>
                    <IconButton>
                      <EditRounded />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        if (window.confirm('Delete this student? ')) {
                          this.props.onDeleteStudent(student.id);
                        }
                      }}
                    >
                      <DeleteRounded />
                    </IconButton>
                  </div>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className="w-100 d-flex">
                  {student.tutionClasses.map((t, i, a) => {
                    const lbl = (
                      <span>
                        Grade{' '}
                        {t.grades.map((g, j, b) => {
                          if (j > 0) {
                            return `,${g.val}`;
                          } else {
                            return g.val;
                          }
                        })}{' '}
                        {t.subject.name}
                      </span>
                    );
                    return (
                      <div
                        className="class-chip"
                        key={i}
                        style={{ backgroundColor: t.subject.color }}
                      >
                        <span>{lbl}</span>
                      </div>
                    );
                  })}
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>

        {this.state.displayAddStudentForm === true ? (
          <AddStudentForm onCancelPopup={this.toggleAddStudentForm} />
        ) : null}
      </div>
    );
  }
}
