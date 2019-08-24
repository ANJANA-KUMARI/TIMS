import React, { Component } from "react";
import Subject from "./Subject";

export const SubjectList = ({ subjects }) => (
  <div>
    {subjects.map((s, i, a) => (
      <Subject subject={s} key={i} />
    ))}
  </div>
);
