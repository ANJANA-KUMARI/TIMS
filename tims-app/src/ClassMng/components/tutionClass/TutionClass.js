import React, { Component } from "react";
import { Card, CardContent, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import "./AddTutionClass.css";
import moment from "moment";

class TutionClass extends Component {
  render() {
    return (
      <div className="tution-clz-card-wrap">
        <div className="teacher-image">
          <div className="teacher-image-wrap">
            <img src="https://sites.ed.gov/hispanic-initiative/files/2014/09/alexandra_fuentes_pic01.jpg" />
          </div>
        </div>

        <Card className="tution-class-cards">
          <CardContent>
            <div className="teacher-name-wrap">
              <span>
                {this.props.tutionClass.teacher.firstName}{" "}
                {this.props.tutionClass.teacher.lastName}
              </span>
            </div>

            <div
              style={{
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  paddingRight: "10px"
                }}
              >
                <div className="edit-icon-wrap">
                  <IconButton
                    style={{
                      left: "94%"
                    }}
                    aria-label="eidt"
                    onClick={() =>
                      this.props.updateTutionClass(this.props.tutionClass)
                    }
                  >
                    <EditIcon />
                  </IconButton>
                </div>

                <div className="clz-name-wrap">
                  <span>
                    Grade{" "}
                    {this.props.tutionClass.grades.map((g, j, b) => {
                      if (j > 0) {
                        return `,${g.val}`;
                      } else {
                        return g.val;
                      }
                    })}{" "}
                    {this.props.tutionClass.subject.name}
                  </span>
                </div>

                <div className="tution-clz-item-wrap">
                  <span>
                    <h6>
                      <span>Type : </span>
                    </h6>
                    {this.props.tutionClass.type.type}
                  </span>
                </div>

                <div className="tution-clz-item-wrap">
                  <span>
                    <h6>Venue : </h6> {this.props.tutionClass.venue}
                  </span>
                </div>

                <div className="tution-clz-item-wrap">
                  <span>
                    <h6>Date : </h6>
                    {moment(this.props.tutionClass.date).format("dddd")}
                  </span>
                </div>

                <div className="tution-clz-item-wrap">
                  <span>
                    <h6>Start Time : </h6>
                    {moment(this.props.tutionClass.startTime).format("LT")}
                  </span>
                </div>

                <div className="tution-clz-item-wrap">
                  <span>
                    <h6>End Time : </h6>
                    {moment(this.props.tutionClass.endTime).format("LT")}
                  </span>
                </div>
              </div>

              <div>
                <IconButton
                  style={{
                    left: "90%"
                  }}
                  aria-label="delete"
                  onClick={() => {
                    if (window.confirm("Delete tution class ?")) {
                      this.props.deleteTutionClass(this.props.tutionClass.id);
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

export default TutionClass;
