import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
//import { useTimer } from "../utils/useTimer";

//Import components
import Focus from "../components/Focus";
import Break from "../components/Break";
import TimerControls from "../components/TimerControls";
import TimerDisplay from "../components/TimerDisplay";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  //sets default focus duration to 25 mins
  const [focusDuration, setFocusDuration] = useState(1500);
  //sets default break duration
  const [breakDuration, setBreakDuration] = useState(300);
  //sets session type
  const [sessionType, setSessionType] = useState("focus");
  //sets if session is ongoing
  //const [sessionInProgress, setSessionInProgress] = useState(false);
  //sets focus time remaining
  const [focusTimer, setFocusTimer] = useState(1500);
  //sets break time remaining
  const [breakTimer, setBreakTimer] = useState(300);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running

      if (sessionType === "focus") {
        setBreakTimer(breakDuration);
        setFocusTimer(Math.max(focusTimer - 1, 0));
        if (focusTimer === 0) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setSessionType("break");
        }
      }
      if (sessionType === "break") {
        setFocusTimer(focusDuration);
        setBreakTimer(Math.max(breakTimer - 1, 0));
        if (breakTimer === 0) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setSessionType("focus");
        }
      }
    },

    isTimerRunning ? 1000 : null //*** TODO: Change to 1000 ms ****
  );

  //FOCUS COMPONENT
  //decreases focus duration by 5 mins per click
  const decrementFocus = () => {
    //does not allow the focus duration to decrease lower than 5 mins
    const newFocusDuration = focusDuration - 300;
    if (newFocusDuration < 300) {
      setFocusTimer(300);
      setFocusDuration(300);
    } else {
      setFocusTimer(newFocusDuration);
      setFocusDuration(newFocusDuration);
    }
  };
  //increases focus duration by 5 mins per click
  const incrementFocus = () => {
    //does not allow the focus duration to increase above 60 mins
    const newFocusDuration = focusDuration + 300;
    setFocusTimer(newFocusDuration);
    if (newFocusDuration > 3600) {
      setFocusTimer(3600);
      setFocusDuration(3600);
    } else {
      setFocusTimer(newFocusDuration);
      setFocusDuration(newFocusDuration);
    }
  };

  //BREAK COMPONENT
  //decrease break duration by 1 min per click
  const decrementBreak = () => {
    const newBreakDuration = breakDuration - 60;
    setBreakTimer(newBreakDuration);
    //does not allow break length to decrease below 1 min
    if (newBreakDuration < 60) {
      setBreakTimer(60);
      setBreakDuration(60);
    } else {
      setBreakTimer(newBreakDuration);
      setBreakDuration(newBreakDuration);
    }
  };

  //increase break duration by 1 min per click
  const incrementBreak = () => {
    const newBreakDuration = breakDuration + 60;
    setBreakTimer(newBreakDuration);
    //does not allow break length to increase above 15 mins
    if (newBreakDuration > 900) {
      setBreakTimer(900);
      setBreakDuration(900);
    } else {
      setBreakTimer(newBreakDuration);
      setBreakDuration(newBreakDuration);
    }
  };

  //Formats time in seconds to minutes:seconds
  function secondsToDuration(givenSeconds) {
    let minutes = Math.floor((givenSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    let seconds = Math.round(givenSeconds % 60)
      .toString()
      .padStart(2, "0");
    if (givenSeconds === 3600) {
      minutes = `60`;
      seconds = `00`;
    }
    return `${minutes}:${seconds}`;
  }

  //TIMER

  //toggle play/pause button
  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }
  //stop timer & reset onClick
  function stopTimer() {
    setIsTimerRunning(false);
    setSessionType("focus");
    setFocusTimer(focusDuration);
    setBreakTimer(breakDuration);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <Focus
          secondsToDuration={secondsToDuration}
          focusDuration={focusDuration}
          decrementFocus={decrementFocus}
          incrementFocus={incrementFocus}
        />
        <Break
          secondsToDuration={secondsToDuration}
          breakDuration={breakDuration}
          decrementBreak={decrementBreak}
          incrementBreak={incrementBreak}
        />
      </div>
      <TimerControls
        classNames={classNames}
        playPause={playPause}
        stopTimer={stopTimer}
        isTimerRunning={isTimerRunning}
        useInterval={useInterval}
      />
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <TimerDisplay
          isTimerRunning={isTimerRunning}
          sessionType={sessionType}
          secondsToDuration={secondsToDuration}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
          focusTimer={focusTimer}
          breakTimer={breakTimer}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
