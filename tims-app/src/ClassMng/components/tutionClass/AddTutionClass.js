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
  OutlinedInput,
  Icon
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker
} from "@material-ui/pickers";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { Cancel, CheckCircle, AccessTime } from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import "./AddTutionClass.css";

export const ADD_TUTIONCLASS_POPUP_MODE = {
  INSERT: "INSERT",
  UPDATE: "UPDATE"
};

class AddTutionClass extends Component {
  state = {
    subjects: this.props.subjectList,
    grades: this.props.gradeList,
    teachers: this.props.teacherList,
    types: this.props.tutionClassTypeList,
    currentTutionClassList: this.props.currentTutionClassList,
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    venue: "",
    selectedSubject: -1,
    selectedGrade: [],
    selectedTeacher: -1,
    selectedType: -1,
    gradeToDisplay: -1,
    nameErrorMsg: "",
    mode: this.props.mode,
    titleToUpdate: "Update the Class",
    titleToAdd: "Add a Class"
  };

  constructor(props) {
    super(props);
    console.log("====================================");
    console.log(props);
    console.log("====================================");
  }

  componentDidMount() {
    console.log("====================================");
    console.log("class to update", this.props.tutionClassToUpdate);
    console.log("====================================");
    if (this.state.mode === ADD_TUTIONCLASS_POPUP_MODE.UPDATE) {
      this.setState({
        selectedSubject: this.props.tutionClassToUpdate.subject.id,
        selectedGrade: this.props.tutionClassToUpdate.grades.map(g => g.val),
        selectedTeacher: this.props.tutionClassToUpdate.teacher.id,
        selectedType: this.props.tutionClassToUpdate.type.id,
        date: this.props.tutionClassToUpdate.date,
        venue: this.props.tutionClassToUpdate.venue,
        startTime: this.props.tutionClassToUpdate.startTime,
        endTime: this.props.tutionClassToUpdate.endTime
      });
    }
    console.log("====================================");
    console.log(this.state.grades);
    console.log("====================================");
  }

  handleStartTimeChange = date => {
    this.setState({
      startTime: date
    });
  };

  handleEndTimeChange = date => {
    this.setState({
      endTime: date
    });
  };

  handleDateChange = date => {
    this.setState({
      date: date
    });
  };

  handleVenueChange = event => {
    this.setState({
      venue: event.target.value
    });
  };

  handleOnClickCreate = () => {
    if (this.state.mode === ADD_TUTIONCLASS_POPUP_MODE.UPDATE) {
      const updatedTutionClass = {
        id: this.props.tutionClassToUpdate.id,
        subject: this.state.selectedSubject,
        grades: this.state.selectedGrade,
        teacher: this.state.selectedTeacher,
        type: this.state.selectedType,
        date: this.state.date,
        venue: this.state.venue,
        startTime: this.state.startTime,
        endTime: this.state.endTime
      };
      this.props.onUpdate(updatedTutionClass);
    } else {
      const tutionClass = {
        subject: this.state.selectedSubject,
        grades: this.state.selectedGrade,
        teacher: this.state.selectedTeacher,
        type: this.state.selectedType,
        date: this.state.date,
        venue: this.state.venue,
        startTime: this.state.startTime,
        endTime: this.state.endTime
      };
      this.props.onCreate(tutionClass);
    }

    this.handleOnClickCancel();
  };

  handleOnClickCancel = () => {
    this.props.onClose();
  };

  // handleChange = (event, changedName) => {
  //   this.setState({
  //     [changedName]: event.target.value
  //   });
  // };

  handleSubjectSelect = event => {
    this.setState({
      selectedSubject: event.target.value
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
            <CardHeader
              title={
                this.state.mode === ADD_TUTIONCLASS_POPUP_MODE.UPDATE
                  ? this.state.titleToUpdate
                  : this.state.titleToAdd
              }
            />
            <IconButton
              className="popup-cancel-btn"
              aria-label="cancel"
              onClick={this.handleOnClickCancel}
            >
              <Cancel />
            </IconButton>
            <CardContent>
              <div className="input-wrap">
                <div className="col-1">
                  {/* Subject */}
                  <div className="subject-wrap">
                    <FormControl
                      className="subject-input input"
                      variant="outlined"
                    >
                      <InputLabel htmlFor="subject">Subject</InputLabel>
                      <Select
                        value={this.state.selectedSubject}
                        onChange={event => {
                          this.handleSubjectSelect(event);
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

                  {/* Teacher */}
                  <div>
                    <FormControl className="input" variant="outlined">
                      <InputLabel htmlFor="teacher">Teacher</InputLabel>
                      <Select
                        value={this.state.selectedTeacher}
                        onChange={event => {
                          this.handleTeacherSelect(event);
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

                  {/* Class type */}
                  <div>
                    <FormControl className="input" variant="outlined">
                      <InputLabel htmlFor="type">Type</InputLabel>
                      <Select
                        value={this.state.selectedType}
                        onChange={event => {
                          this.handleTutionClassTypeSelect(event);
                        }}
                        input={
                          <OutlinedInput
                            labelWidth={35}
                            name="type"
                            id="type"
                          />
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

                  {/* Venue */}
                  <div>
                    <TextField
                      id="outlined-subject-input"
                      className="input"
                      label="Venue"
                      type="text"
                      value={this.state.venue}
                      onInput={this.handleVenueChange}
                      name="subject_name"
                      margin="normal"
                      variant="outlined"
                    />
                  </div>
                </div>

                <div className="col-2">
                  {/* Grade */}
                  <div className="grade-wrap">
                    <FormControl
                      className="grade-input input"
                      variant="outlined"
                    >
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

                    <div
                      style={{
                        paddingBottom:
                          this.state.selectedGrade.length > 0 ? "10px" : "0px"
                      }}
                    >
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

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        className="input"
                        margin="normal"
                        id="date"
                        label="Date"
                        format="MM/dd/yyyy"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                      <KeyboardTimePicker
                        className="input"
                        margin="normal"
                        id="start-time"
                        label="Start Time"
                        value={this.state.startTime}
                        onChange={this.handleStartTimeChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time"
                        }}
                        keyboardIcon={
                          <Icon>
                            <AccessTime />
                          </Icon>
                        }
                      />

                      <KeyboardTimePicker
                        className="input"
                        margin="normal"
                        id="end-time"
                        label="End Time"
                        value={this.state.endTime}
                        onChange={this.handleEndTimeChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time"
                        }}
                        keyboardIcon={
                          <Icon>
                            <AccessTime />
                          </Icon>
                        }
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
