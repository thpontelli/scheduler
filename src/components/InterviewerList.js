import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {

  const listInterviewers = props.interviewers.map((interviewer) =>
    <li><InterviewerListItem
      key={interviewer.id}
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.id}
      setInterviewer={interviewer.setInterviewer}
    />
    </li>
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {listInterviewers}
      </ul>
    </section>
  )
}