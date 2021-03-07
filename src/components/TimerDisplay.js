import React from "react";
import classNames from "../utils/class-names";
import ProgressBar from "../components/ProgressBar";

function TimerDisplay({
  isTimerRunning,
  sessionType,
  secondsToDuration,
  focusDuration,
  breakDuration,
  focusTimer,
  breakTimer,
}) {
  return (
    <section
      className={classNames({
        invisible: !isTimerRunning,
        visible: isTimerRunning,
      })}
    >
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
          <h2 data-testid="session-title">
            {sessionType === "focus"
              ? `Focusing for ${secondsToDuration(focusDuration)} minutes`
              : `On Break for ${secondsToDuration(breakDuration)} minutes`}
          </h2>
          {/* TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {sessionType === "focus"
              ? `${secondsToDuration(focusTimer)} remaining`
              : `${secondsToDuration(breakTimer)} remaining`}
          </p>
        </div>
      </div>
      <ProgressBar
        sessionType={sessionType}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
        focusTimer={focusTimer}
        breakTimer={breakTimer}
      />
    </section>
  );
}

export default TimerDisplay;
