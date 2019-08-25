import React, { Component } from "react";
import Subject from "./Subject";
import { display } from "@material-ui/system";

export const SubjectList = ({ subjects }) => (
  <div style={{ display: "flex", padding: "10px" }}>
    {subjects.map((s, i, a) => (
      <Subject subject={s} key={i} />
    ))}
  </div>
);
