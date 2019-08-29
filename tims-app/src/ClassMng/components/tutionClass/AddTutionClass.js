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
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { Cancel, CheckCircle } from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import "./AddTutionClass.css";

class AddTutionClass extends Component {
  state = {
    subjects: this.props.subjectList,
    grades: this.props.gradeList,
    teachers: this.props.teacherList,
    types: this.props.tutionClassTypeList,
    datetime: new Date(),
    venue: "",
    selectedSubject: -1,
    selectedGrade: [],
    selectedTeacher: -1,
    selectedType: -1,
    selectedDate: new Date(),
    selectedEndTime: new Date(),
    gradeToDisplay: -1,
    nameErrorMsg: ""
  };

  handleDateChange = date => {
    this.setState({
      selectedDate: date
    });
  };

  handleEndTimeChange = date => {
    this.setState({
      selectedEndTime: date
    });
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

  handleGradeSelect = event => {
    const currentGrade = this.state.selectedGrade;
    const selectedGrade = event.target.value;
    if (currentGrade.includes(selectedGrade)) {
      alert(
        `Grade ${selectedGrade} already selected. Please select another Grade!`
      );
      return;
    } else {
      currentGrade.push(event.target.value);
      this.setState({
        selectedGrade: currentGrade,
        gradeToDisplay: event.target.value
      });
    }
  };

  handleTutionClassTypeSelect = event => {
    this.setState({
      selectedType: event.target.value
    });
  };

  handleTeacherSelect = event => {
    this.setState({
      selectedTeacher: event.target.value
    });
  };

  handleDelete = grade => {
    const deleteSelectedGrade = this.state.selectedGrade;
    const indexToDelete = deleteSelectedGrade.indexOf(grade);
    deleteSelectedGrade.splice(indexToDelete, 1);
    this.setState({
      selectedGrade: deleteSelectedGrade,
      gradeToDisplay: -1
    });
  };

  render() {
    return (
      <div className="add-tution-class-popup">
        <div className="add-tution-class-backdrop" />
        <div className="add-tution-class-form">
          <Card className="popup-card">
            <CardHeader title="Add new class" />
            <IconButton
              className="popup-cancel-btn"
              aria-label="cancel"
              onClick={this.handleOnClickCancel}
            >
              <Cancel />
            </IconButton>
            <CardContent>
              <div className="input-wrap">
                <div className="subject-grade-wrap">
                  <div className="subject-wrap">
                    <FormControl className="subject-input" variant="outlined">
                      <InputLabel htmlFor="subject">Subject</InputLabel>
                      <Select
                        value={this.state.selectedSubject}
                        onChange={event => {
                          this.handleChange(event, "selectedSubject");
                        }}
                        input={
                          <OutlinedInput
                            labelWidth={53}
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
                  </div>

                  <div className="grade-wrap">
                    <FormControl className="grade-input" variant="outlined">
                      <InputLabel htmlFor="grade">Grade</InputLabel>
                      <Select
                        value={this.state.gradeToDisplay}
                        onChange={event => {
                          this.handleGradeSelect(event);
                        }}
                        input={
                          <OutlinedInput
                            labelWidth={47}
                            name="grade"
                            id="grade"
                          />
                        }
                      >
                        {this.state.grades.map((g, i, a) => {
                          return (
                            <MenuItem key={i} value={g.id}>
                              {g.val}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>

                    <div>
                      {this.state.selectedGrade.map((g, i, a) => {
                        return (
                          <Chip
                            className="selected-grade"
                            key={i}
                            label={g}
                            onDelete={() => {
                              this.handleDelete(g);
                            }}
                            color="primary"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="teacher">Teacher</InputLabel>
                    <Select
                      value={this.state.selectedTeacher}
                      onChange={event => {
                        this.handleTeacherSelect(event, "selectedTeacher");
                      }}
                      input={
                        <OutlinedInput
                          labelWidth={55}
                          name="teacher"
                          id="teacher"
                        />
                      }
                    >
                      {this.state.teachers.map((t, i, a) => {
                        return (
                          <MenuItem key={i} value={t.id}>
                            {t.firstName} {t.lastName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                      value={this.state.selectedType}
                      onChange={event => {
                        this.handleTutionClassTypeSelect(event, "selectedType");
                      }}
                      input={
                        <OutlinedInput labelWidth={35} name="type" id="type" />
                      }
                    >
                      {this.state.types.map((t, i, a) => {
                        return (
                          <MenuItem key={i} value={t.id}>
                            {t.type}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <TextField
                    id="outlined-subject-input"
                    label="Venue"
                    type="text"
                    onInput={this.handleNameChange}
                    name="subject_name"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div className="date-time-wrap">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        style={{ marginRight: "177px" }}
                        margin="normal"
                        id="date"
                        label="Date"
                        format="MM/dd/yyyy"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                      <KeyboardTimePicker
                        margin="normal"
                        id="start-time"
                        label="Start Time"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time"
                        }}
                      />

                      <KeyboardTimePicker
                        margin="normal"
                        id="end-time"
                        label="End Time"
                        value={this.state.selectedEndTime}
                        onChange={this.handleEndTimeChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time"
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </div>
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
