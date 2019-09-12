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

import { Cancel, CheckCircle, AccessTime } from "@material-ui/icons";
import bsCustomFileInput from "bs-custom-file-input";

class AddTutionClass extends Component {
  state = {
    tutionClasses: this.props.tutionClasses,
    selectedTutionClass: -1,
    description: "",
    file: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    bsCustomFileInput.init();
  }

  handleOnClickCreate = () => {
    const studyMat = new FormData();
    studyMat.append("tutionClassId", this.state.selectedTutionClass);
    studyMat.append("description", this.state.description);
    studyMat.append("studymatfile", this.state.file);

    this.props.onCreate(studyMat);

    this.handleOnClickCancel();
  };

  handleOnClickCancel = () => {
    this.props.onClose();
  };

  handleTutionClassSelect = event => {
    this.setState({
      selectedTutionClass: event.target.value
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleFileAdded = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  render() {
    return (
      <div className="add-tution-class-popup">
        <div className="add-tution-class-backdrop" />
        <div className="add-tution-class-form" style={{ width: "400px" }}>
          <Card className="popup-card">
            <CardHeader title="Add new study material" />
            <IconButton
              className="popup-cancel-btn"
              aria-label="cancel"
              onClick={this.handleOnClickCancel}
            >
              <Cancel />
            </IconButton>
            <CardContent>
              <div style={{ marginBottom: "10px", marginRight: "30px" }}>
                <div className="tution-class-wrap">
                  <FormControl
                    className="tution-class"
                    variant="outlined"
                    style={{ width: "100%" }}
                  >
                    <InputLabel htmlFor="tutionclass">Tution class</InputLabel>
                    <Select
                      value={this.state.selectedTutionClass}
                      onChange={event => {
                        this.handleTutionClassSelect(event);
                      }}
                      input={
                        <OutlinedInput
                          labelWidth={85}
                          name="tutionclass"
                          id="tutionclass"
                        />
                      }
                    >
                      {this.state.tutionClasses.map((t, i, a) => {
                        return (
                          <MenuItem key={i} value={t.id}>
                            Grade{" "}
                            {t.grades.map((g, j, b) => {
                              if (j > 0) {
                                return `,${g.val}`;
                              } else {
                                return g.val;
                              }
                            })}{" "}
                            {t.subject.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>

                {/* Description */}
                <div>
                  <TextField
                    id="outlined-subject-input"
                    className="input"
                    label="Description"
                    type="text"
                    onInput={this.handleDescriptionChange}
                    name="description"
                    margin="normal"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={this.handleFileAdded}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
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
