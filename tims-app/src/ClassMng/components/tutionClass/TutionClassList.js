import React, { Component } from "react";
import TutionClass from "./TutionClass";
import AddTutionClassForm from "../../containers/AddTutionClassForm";
import { ADD_TUTIONCLASS_POPUP_MODE } from "./AddTutionClass";
import { Button } from "@material-ui/core";
import { ROUTE_PATHS } from "../../../Constants";
import { Link } from "react-router-dom";

export class TutionClassList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }

  state = {
    showUpdatePopUp: false,
    tutionClassToUpdate: null,
    tutionClasses: this.props.tutionClasses
  };

  toggleUpdatePopUp = () => {
    this.setState({
      showUpdatePopUp: !this.state.showUpdatePopUp
    });
  };

  handleUpdate = tutionClass => {
    this.toggleUpdatePopUp();
    this.setState({
      tutionClassToUpdate: tutionClass
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      tutionClasses: nextProps.tutionClasses
    });
  }

  render() {
    return (
      <div>
        <div>
          <Link to={ROUTE_PATHS.TUTION_CLASS_REPORT}>
            <Button variant="contained" color="primary">
              Reports
            </Button>
          </Link>
        </div>

        <div style={{ display: "flex", padding: "20px", flexWrap: "wrap" }}>
          {this.state.tutionClasses.map((t, i, a) => (
            <TutionClass
              tutionClass={t}
              key={i}
              updateTutionClass={this.handleUpdate}
              deleteTutionClass={this.props.onDeleteTutionClass}
            />
          ))}
          {this.state.showUpdatePopUp ? (
            <AddTutionClassForm
              mode={ADD_TUTIONCLASS_POPUP_MODE.UPDATE}
              onCancelPopup={this.toggleUpdatePopUp}
              tutionClassToUpdate={this.state.tutionClassToUpdate}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
