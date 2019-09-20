import React, { Component } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Button
} from "@material-ui/core";
import Report1 from "./Report1";
class TutionClassReport extends Component {
  state = {
    selectedType: 1,
    displayReport: false
  };

  handleTypeChange = event => {
    this.setState({
      selectedType: event.target.value
    });
  };

  handleGenerateClick = () => {
    this.setState({
      displayReport: true
    });
  };

  render() {
    return (
      <div>
        <div style={{ padding: "30px" }}>
          <FormControl variant="outlined">
            <InputLabel>Type</InputLabel>
            <Select
              style={{ minWidth: "250px" }}
              value={this.state.selectedType}
              onChange={this.handleTypeChange}
              input={
                <OutlinedInput labelWidth={39} name="report" id="report" />
              }
            >
              <MenuItem value={1}>Tution Class Report</MenuItem>
              <MenuItem value={2}>Tution Class Location Report</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleGenerateClick}
          >
            Generate Report
          </Button>
        </div>
        {/* <div>
          {this.state.selectedType === 1 && this.state.displayReport ? (
            <Report1 tutionClasses={this.props.tutionClasses} />
          ) : null}
        </div> */}
      </div>
    );
  }
}

export default TutionClassReport;
