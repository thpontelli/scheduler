import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  function formatSpots(spotsnum) {
    if (spotsnum === 0) {
      return "no spots remaining";
    } else if (spotsnum === 1) {
      return "1 spot remaining";
    } else {
      return `${spotsnum} spots remaining`;
    }
  }

  let dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })


  return (
    <ul>
      <li
        className={dayClass}
        onClick={() => props.setDay(props.name)}
        data-testid="day"
      >
        <h2 className="text--regular">{props.name}</h2>
        <h3 className="text--light">
          {formatSpots(props.spots)}
        </h3>
      </li>
    </ul>
  );
}

