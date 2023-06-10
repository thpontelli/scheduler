import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";


export default function InterviewerListItem(props) {
  // return (
  //   <li className="interviewers__item">
  //     <img
  //       className="interviewers__item-image"
  //       src="https://i.imgur.com/LpaY82x.png"
  //       alt="Sylvia Palmer"
  //     />
  //     Sylvia Palmer
  //   </li>
  // )

  const interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected,
  })

  const interviewerImgClass = classNames(
    "interviewers__item-image", {
    "interviewers__item--selected-image": props.selected
  });

  return (
    <li className={interviewerClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className={interviewerImgClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}