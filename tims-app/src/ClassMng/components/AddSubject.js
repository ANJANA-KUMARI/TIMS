import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton
} from '@material-ui/core';
import { Cancel, CheckCircle } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';

import './AddSubject.css';

class AddSubject extends Component {
  state = {};

  handleOnClickCreate = () => {
    // todo
  };

  handleOnClickCancel = () => {
    this.props.onCancelPopup();
  };

  render() {
    return (
      <div className="add-subject-popup">
        <div className="add-subject-backdrop" />
        <div className="add-subject-form">
          <Card>
            <CardHeader title="Add new subject" />
            <CardContent />
            <CardActions disableSpacing>
              <IconButton
                aria-label="cancel"
                onClick={this.handleOnClickCancel}
              >
                <Cancel />
              </IconButton>
              <IconButton
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
