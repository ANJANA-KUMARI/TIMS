import React, { Component } from 'react';
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
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Cancel, CheckCircle, AccessTime } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import '../../ClassMng/components/tutionClass/AddTutionClass.css';
import './AddStudent.css';

class AddStudent extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    selectedTutionClasses: []
  };

  constructor(props) {
    super(props);
    console.log('====================================');
    console.log(props);
    console.log('====================================');
  }

  handleOnClickCreate = () => {
    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      tutionClasses: this.state.selectedTutionClasses
    };
    this.props.onCreate(student);
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

  handleTutionClassSelect = tClassId => {
    const classIndex = this.state.selectedTutionClasses.indexOf(tClassId);

    const classIds = [...this.state.selectedTutionClasses];

    if (classIndex === -1) {
      classIds.push(tClassId);
    } else {
      classIds.splice(classIndex, 1);
    }

    console.log('====================================');
    console.log('onselect class', classIds, tClassId);
    console.log('====================================');
    this.setState({
      selectedTutionClasses: classIds
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
              <div className="row">
                <div className="col input-list">
                  {/* firstname */}
                  <div>
                    <TextField
                      id="outlined-fname-input"
                      className="input"
                      label="First name"
                      type="text"
                      onInput={e => this.handleChange(e, 'firstName')}
                      name="first_name"
                      margin="normal"
                      variant="outlined"
                    />
                  </div>

                  {/* lastname */}
                  <div>
                    <TextField
                      id="outlined-fname-input"
                      className="input"
                      label="Last name"
                      type="text"
                      onInput={e => this.handleChange(e, 'lastName')}
                      name="last_name"
                      margin="normal"
                      variant="outlined"
                    />
                  </div>

                  {/* email */}
                  <div>
                    <TextField
                      id="outlined-fname-input"
                      className="input"
                      label="email"
                      type="email"
                      onInput={e => this.handleChange(e, 'email')}
                      name="email"
                      margin="normal"
                      variant="outlined"
                    />
                  </div>

                  {/* phone */}
                  <div>
                    <TextField
                      id="outlined-fname-input"
                      className="input"
                      label="Phone"
                      type="tel"
                      onInput={e => this.handleChange(e, 'phone')}
                      name="phone"
                      margin="normal"
                      variant="outlined"
                    />
                  </div>

                  {/* address */}
                  <div>
                    <TextField
                      id="outlined-fname-input"
                      className="input"
                      label="Address"
                      type="text"
                      onInput={e => this.handleChange(e, 'address')}
                      name="address"
                      margin="normal"
                      variant="outlined"
                    />
                  </div>
                </div>

                <div className="col">
                  <h6>Tution classes</h6>
                  <List>
                    {this.props.tutionClasses.map((tClass, i, a) => {
                      const primaryText = (
                        <span>
                          Grade{' '}
                          {tClass.grades.map((g, j, b) => {
                            if (j > 0) {
                              return `,${g.val}`;
                            } else {
                              return g.val;
                            }
                          })}{' '}
                          {tClass.subject.name}
                        </span>
                      );
                      return (
                        <ListItem
                          key={i}
                          role={undefined}
                          dense
                          button
                          onClick={() => {
                            this.handleTutionClassSelect(tClass.id);
                          }}
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={
                                this.state.selectedTutionClasses.indexOf(
                                  tClass.id
                                ) !== -1
                              }
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': 'tClassLbl' }}
                            />
                          </ListItemIcon>
                          <ListItemText id="tClassLbl" primary={primaryText} />
                        </ListItem>
                      );
                    })}
                  </List>
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

export default AddStudent;
