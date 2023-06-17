import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]); // This line is new!

  const transition = function (newMode, replace = false) {
    if (replace === true) {
      let last = history.pop();
    }

    history.push(newMode);
    setMode(newMode);
  }

  const back = function () {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(history.slice(0, history.length - 1));
    }
  }


  return { mode, transition, back }
};

