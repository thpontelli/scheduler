import React from "react";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  const listInterviewers = props.interviewer.map((interviewer) =>
    <li><InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
    </li>
  );

  return (
    <ul>
      {listInterviewers}
    </ul>
  )
}