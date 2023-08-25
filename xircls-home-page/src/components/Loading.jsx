import React from "react";
// import './Loading.css'
import ProgressBar from "react-bootstrap/ProgressBar";

const Loading = () => {
  const now = 75;

  return (
    <>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar w-75"></div>
      </div>
    </>
  );
};

export default Loading;
