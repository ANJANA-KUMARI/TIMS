import React, { Component } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Icon,
  IconButton
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS, API_PATH } from '../../Constants';

import '../studyMaterials.css';
import {
  NoteAdd,
  CloudDownloadRounded,
  DeleteRounded,
  EditRounded,
  Description
} from '@material-ui/icons';

import AddStudyMaterialForm from '../containers/AddStudyMaterialForm';

class StudyMaterialDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studyMaterials: this.props.studyMaterials,
      displayAddStudyMatForm: false
    };
  }

  componentDidMount() {
    this.props.fetchStudyMaterials();
    this.props.fetchTutionClasses();

    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      studyMaterials: nextProps.studyMaterials
    });
  }

  toggleDisplayAddStudyMatForm = () => {
    this.setState({
      displayAddStudyMatForm: !this.state.displayAddStudyMatForm
    });
  };
  render() {
    return (
      <div className="study-mat-wrap">
        <div className="materials-list-wrap">
          <Button
            variant="outlined"
            className="study-mat-item add-btn"
            onClick={this.toggleDisplayAddStudyMatForm}
          >
            <div>
              <Icon>
                <NoteAdd />
              </Icon>
              <span>Add new </span>
            </div>
          </Button>

          {this.state.studyMaterials.map((studyMat, i, a) => (
            <Card className="study-mat-item" key={i}>
              <CardContent>
                <div className="wrap">
                  <div className="title">
                    <div
                      className="round"
                      style={{
                        backgroundColor: studyMat.tutionClass.subject.color,
                        width: '20px',
                        height: '20px'
                      }}
                    ></div>
                    <span style={{ marginLeft: '10px', fontSize: '12px' }}>
                      {studyMat.tutionClass.subject.name}
                    </span>
                  </div>

                  <div>
                    <span>{studyMat.description}</span>
                  </div>

                  <div className="file">
                    <Icon>
                      <Description color="#aaa" />
                    </Icon>
                    <span className="filename">
                      {studyMat.displayableFileName}
                    </span>
                  </div>

                  <div className="button-wrap">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        if (window.confirm('Delete this subject material? ')) {
                          this.props.deleteStudyMaterial(studyMat.id);
                        }
                      }}
                    >
                      <DeleteRounded />
                    </IconButton>
                    <IconButton aria-label="edit">
                      <EditRounded />
                    </IconButton>
                    <a
                      href={`${API_PATH}/studymat/file/${encodeURIComponent(
                        studyMat.fileName
                      )}`}
                    >
                      <IconButton aria-label="download">
                        <CloudDownloadRounded />
                      </IconButton>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {this.state.displayAddStudyMatForm ? (
          <AddStudyMaterialForm
            onCancelPopup={this.toggleDisplayAddStudyMatForm}
          />
        ) : null}
      </div>
    );
  }
}

export default StudyMaterialDashboard;
