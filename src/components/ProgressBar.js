import React from "react";

function ProgressBar({
  sessionType,
  focusDuration,
  breakDuration,
  focusTimer,
  breakTimer,
}) {
  return (
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={
              sessionType === "focus"
                ? 100 - (focusTimer / focusDuration) * 100
                : 100 - (breakTimer / breakDuration) * 100
            } // TODO: Increase aria-valuenow as elapsed time increases
            style={
              //{ width: `10%` }

              sessionType === "focus"
                ? {
                    width: `${100 - (focusTimer / focusDuration) * 100}%`,
                  }
                : {
                    width: `${100 - (breakTimer / breakDuration) * 100}%`,
                  }
            } // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
