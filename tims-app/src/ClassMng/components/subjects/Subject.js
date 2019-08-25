import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

class Subject extends Component {
  state = {};
  render() {
    return (
      <Card className="class-dashboard-shortcut">
        {/* <CardHeader
          avatar={
            <Avatar>
              <div
                className="round"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: this.props.subject.color
                }}
              />
            </Avatar>
          }
          title={this.props.subject.name}
        /> */}

        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <div
              className="round"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: this.props.subject.color
              }}
            />

            <div>
              <span>{this.props.subject.name}</span>
            </div>

            <div>
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Subject;
