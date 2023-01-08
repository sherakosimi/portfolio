import React, { useState } from "react";

function Toggle() {
  const [backTime, setBackTime] = useState("night");

  const handleClick = () => {
    if (backTime === "night") {
      setBackTime("day");
    } else {
      setBackTime("night");
    }
  };

  return (
    <div className="Switch" data-time={backTime}>
      <div className="Toggle" onClick={handleClick} data-time={backTime}>
        <div className="Button"></div>
      </div>
    </div>
  );
}

export default Toggle;
