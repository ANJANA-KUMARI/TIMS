import React, { Component } from 'react';
import { Card, CardContent, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import './AddEmployee.css';
import moment from 'moment';

class Employee extends Component {
  render() {
    return (
      <div className="employee-card-wrap">
        <div className="employee-image">
          <div className="employee-image-wrap">
            <img src="https://sites.ed.gov/hispanic-initiative/files/2014/09/alexandra_fuentes_pic01.jpg" />
          </div>
        </div>

        <Card className="employee-cards">
          <CardContent>
            <div className="employee-name-wrap">
              <span>
                {this.props.employee.firstName} {this.props.employee.lastName}
              </span>
            </div>

            <div
              style={{
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  alignItems: 'center',
                  paddingRight: '10px'
                }}
              >
                <div className="edit-icon-wrap">
                  <IconButton
                    style={{
                      left: '94%'
                    }}
                    aria-label="eidt"
                    onClick={() =>
                      this.props.updateEmployee(this.props.employee)
                    }
                  >
                    <EditIcon />
                  </IconButton>
                </div>

                <div className="employee-item-wrap">
                  <span>
                    <h6>
                      <span>Subject : </span>
                    </h6>
                    {this.props.employee.subject.name}
                  </span>
                </div>

                <div className="employee-item-wrap">
                  <span>
                    <h6>
                      <span>Address : </span>
                    </h6>
                    {this.props.employee.address}
                  </span>
                </div>

                <div className="employee-item-wrap">
                  <span>
                    <h6>Email : </h6> {this.props.employee.email}
                  </span>
                </div>

                <div className="employee-item-wrap">
                  <span>
                    <h6>Phone : </h6> {this.props.employee.phone}
                  </span>
                </div>
              </div>

              <div>
                <IconButton
                  style={{
                    left: '90%'
                  }}
                  aria-label="delete"
                  onClick={() => {
                    if (window.confirm('Delete employee ?')) {
                      this.props.deleteEmployee(this.props.employee.id);
                    }
                  }}
                >
                  <Delete />
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Employee;
