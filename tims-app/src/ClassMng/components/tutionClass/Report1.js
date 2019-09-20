import React, { Component } from "react";

class Report1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Tuiton Class ID</th>
              <th scope="col">Grade</th>
              <th scope="col">Subject</th>
              <th scope="col">Teacher</th>
              <th scope="col">Student Count</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.props.tutionClasses.map((t, i, a) => {
              return (
                <tr>
                  <th scope="row">{t.id}</th>
                  <td>
                    {t.grades.map((g, j, b) => {
                      if (j > 0) {
                        return `,${g.val}`;
                      } else {
                        return g.val;
                      }
                    })}
                  </td>
                  <td>{t.subject.name}</td>
                  <td>
                    {t.teacher.firstName}
                    {t.teacher.lastName}
                  </td>
                  <td>{t.students.length}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Report1;
