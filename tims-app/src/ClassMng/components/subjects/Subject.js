import React, { Component } from "react";
import { Card, CardHeader, Avatar } from "@material-ui/core";

class Subject extends Component {
  state = {};
  render() {
    return (
      <Card className="class-dashboard-shortcut">
        <CardHeader
          avatar={
            <Avatar>
              <div
                className="round"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: this.props.subject.color
                }}
              />
            </Avatar>
          }
          title={this.props.subject.name}
        />
      </Card>
    );
  }
}

export default Subject;
