import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import "./AddTutionClass.css";

class AddTutionClass extends Component {
  state = {
    subjects: this.props.subjectList,
    grades: this.props.grades,
    teachers: this.props.teacherList,
    types: this.props.types,
    datetime: new Date(),
    venue: "",
    selectedSubject: -1,
    selectedGrade: [],
    selectedTeacher: -1,
    selectedType: -1
  };

  handleOnClickCreate = () => {
    const tutionClass = {
      subject: this.state.selectedSubject,
      grades: this.state.selectedGrade,
      teacher: this.state.selectedTeacher,
      type: this.state.selectedType,
      datetime: this.state.datetime,
      venue: this.state.venue
    };
    this.props.onCreate(tutionClass);
    this.handleOnClickCancel();
  };

  handleOnClickCancel = () => {
    this.props.onClose();
  };

  handleChange = (event, changedName) => {
    this.setState({
      [changedName]: event.target.value
    });
  };

  render() {
    return (
      <div className="add-tution-class-popup">
        <div className="add-tution-class-backdrop" />
        <div className="add-tution-class-form">
          <Card className="popup-card">
            <CardHeader title="Add new subject" />
            <IconButton
              className="popup-cancel-btn"
              aria-label="cancel"
              onClick={this.handleOnClickCancel}
            >
              <Cancel />
            </IconButton>
            <CardContent>
              <div className="input-wrap">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="subject">Subject</InputLabel>
                  <Select
                    value={this.state.selectedSubject}
                    onChange={event => {
                      this.handleChange(event, "selectedSubject");
                    }}
                    input={
                      <OutlinedInput
                        labelWidth={55}
                        name="subject"
                        id="subject"
                      />
                    }
                  >
                    {this.state.subjects.map((s, i, a) => {
                      return (
                        <MenuItem key={i} value={s.id}>
                          {s.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <FormControl variant="outlined">
                  <InputLabel htmlFor="subject">Subject</InputLabel>
                  <Select
                    value={this.state.selectedSubject}
                    onChange={event => {
                      this.handleChange(event, "selectedSubject");
                    }}
                    input={
                      <OutlinedInput
                        labelWidth={55}
                        name="subject"
                        id="subject"
                      />
                    }
                  >
                    {this.state.subjects.map((s, i, a) => {
                      return (
                        <MenuItem key={i} value={s.id}>
                          {s.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <TextField
                  id="outlined-subject-input"
                  label="Subject Name"
                  type="text"
                  onInput={this.handleNameChange}
                  name="subject_name"
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton
                className="popup-create-btn"
                aria-label="create"
                onClick={this.handleOnClickCreate}
              >
                <CheckCircle />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default AddTutionClass;
