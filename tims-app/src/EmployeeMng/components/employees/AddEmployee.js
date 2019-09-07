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
import "./AddEmployee.css";

export const ADD_EMPLOYEE_POPUP_MODE = {
    INSERT: "INSERT",
    UPDATE: "UPDATE"
};

class AddTutionClass extends Component {
    state = {
        subjects: this.props.subjectList,
        currentEmployeeList: this.props.currentEmployeeList,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        selectedSubject: -1,
        selectedType: -1,
        nameErrorMsg: "",
        mode: this.props.mode,
        titleToUpdate: "Update the Class",
        titleToAdd: "Add a Class"
    };

    componentDidMount() {
        if (this.state.mode === ADD_EMPLOYEE_POPUP_MODE.UPDATE) {
            this.setState({
           
            });
        }
    }

    handleOnClickCreate = () => {
            const employee = {
                subject: this.state.selectedSubject,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                type: this.state.selectedType,
                phone: this.state.phone,
                email: this.state.email,
                address: this.state.address
            };
            this.props.onCreate(employee);
        this.handleOnClickCancel();
    };

    handleOnClickCancel = () => {
        this.props.onClose();
    };

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        });
    };

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    };

    handleEmployeeTypeSelect = event => {
        this.setState({
            selectedType: event.target.value
        });
    };

    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        });
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        });
    };

    handleSubjectSelect = event => {
        this.setState({
            selectedSubject: event.target.value
        });
    };



    render() {
        return (
            <div className="add-employee-popup">
                <div className="add-employee-backdrop" />
                <div className="add-employee-form">
                    <Card className="popup-card">
                        <CardHeader
                            title={
                                this.state.mode === ADD_EMPLOYEE_POPUP_MODE.UPDATE
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
                            <div className="input-wrap row">
                                <div className="col">
                                            {/* First Name */}
                                            <div>
                                                <TextField
                                                    id="outlined-subject-input"
                                                    className="input"
                                                    label="First Name"
                                                    type="text"
                                                    value={this.state.firstName}
                                                    onInput={this.handleFirstNameChange}
                                                    name="first_name"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </div>
                                            {/* Last Name */}
                                            <div>
                                                <TextField
                                                    id="outlined-subject-input"
                                                    className="input"
                                                    label="Last Name"
                                                    type="text"
                                                    value={this.state.lastName}
                                                    onInput={this.handleLastNameChange}
                                                    name="last_name"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </div>
                                            {/* Phone */}
                                            <div>
                                                <TextField
                                                    id="outlined-subject-input"
                                                    className="input"
                                                    label="Phone"
                                                    type="text"
                                                    value={this.state.phone}
                                                    onInput={this.handlePhoneChange}
                                                    name="phone"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <TextField
                                                    id="outlined-subject-input"
                                                    className="input"
                                                    label="Email"
                                                    type="email"
                                                    value={this.state.email}
                                                    onInput={this.handleEmailChange}
                                                    name="email"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </div>
                                    
                               
                                </div>
                                <div className="col">


                                    {/* Address */}
                                    <div>
                                        <TextField
                                            id="outlined-subject-input"
                                            className="input"
                                            label="Address"
                                            type="text"
                                            value={this.state.address}
                                            onInput={this.handleAddressChange}
                                            name="address"
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    </div>
                                    {/* Employee type */}
                                    {/* <div>
                                                    <FormControl className="input" variant="outlined">
                                                        <InputLabel htmlFor="type">Type</InputLabel>
                                                        <Select
                                                            value={this.state.selectedType}
                                                            onChange={event => {
                                                                this.handleEmployeeTypeSelect(event);
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
                                                </div> */}


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
