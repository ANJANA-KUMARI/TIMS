import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  MenuItem
} from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import "./AddSubject.css";
import { addSubject } from "../../actions/subjectActions";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

class AddSubject extends Component {
  colorList = ["#4dabf5", "#757ce8", "#ff8a65", "#ffff00", "#69f0ae"];

  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1"
    },
    colorHex: "",
    name: ""
  };

  handleOnClickCreate = () => {
    this.props.onCreate({ name: this.state.name, color: this.state.colorHex });
    this.handleOnClickCancel();
  };

  handleOnClickCancel = () => {
    this.props.onClose();
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleColorChange = (color, event) => {
    this.setState({
      color: color.rgb,
      colorHex: color.hex
    });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${
            this.state.color.b
          }, ${this.state.color.a})`
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2",
          top: "51px",
          left: "70px"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });
    return (
      <div className="add-subject-popup">
        <div className="add-subject-backdrop" />
        <div className="add-subject-form">
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
                <TextField
                  id="outlined-subject-input"
                  label="Subject Name"
                  type="text"
                  onInput={this.handleNameChange}
                  name="subject_name"
                  margin="normal"
                  variant="outlined"
                />
                {/* <TextField
                  id="outlined-color"
                  select
                  label="Color"
                  value={this.state.color}
                  onChange={this.handleColorChange}
                  margin="normal"
                  variant="outlined"
                >

                  {this.colorList.map((value) => {
                    return (
                      <MenuItem key={this.colorList.indexOf(value)} value={this.colorList.indexOf(value)}>
                        <div className="subject-color-item" style={{ backgroundColor: value }}>

                        </div>
                      </MenuItem>
                    )

                  })}
                </TextField> */}

                <div>
                  <h6>Color: </h6>
                  <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                  </div>
                  {this.state.displayColorPicker ? (
                    <div style={styles.popover}>
                      <div style={styles.cover} onClick={this.handleClose} />
                      <SketchPicker
                        color={this.state.color}
                        onChange={this.handleColorChange}
                      />
                    </div>
                  ) : null}
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

export default AddSubject;
