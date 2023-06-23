import {useState} from "react";

export default function useVisualMode(initial){
  //I used let instead of const
  let [mode, setMode] = useState(initial);
  let [history, setHistory] = useState([initial]); 


  //transition function
  function transition(nextMode, replace = false) {
    if(replace){
      setHistory(prev => prev.slice(0, -1));
      setHistory(prev => [...prev, nextMode]);
      }else{
        setHistory(prev => [...prev, nextMode]); 
      }
      setMode(nextMode);
  }

  //back function
  function back() {
    if(history.length > 1) {
      setHistory(history.slice(0, -1));
      setMode(history[history.length-2]);
    }
  }

  return { mode, transition, back};
}

// import { useState } from "react";

// export default function useVisualMode(initialMode) {
//   const [mode, setMode] = useState(initialMode);
//   const [history, setHistory] = useState([initialMode]); // This line is new!

//   const transition = function (newMode, replace = false) {
//     if (replace === true) {
//       let last = history.pop();
//     }

//     history.push(newMode);
//     setMode(newMode);
//   }

//   const back = function () {
//     if (history.length > 1) {
//       setMode(history[history.length - 2]);
//       setHistory(history.slice(0, history.length - 1));
//     }
//   }


//   return { mode, transition, back }
// };




