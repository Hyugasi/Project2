import React from "react";
import "./prevent.css";

function Prevent() {
  return (
    <div className="prevent">
      {/* <h1>This is how you can help stop the spread!</h1> */}
      <div className="video">
        <h1>Wash Your Hands:</h1>
        <p>Here is a handwashing tutorial by the one and only Alton Brown</p>
        <iframe
          title="AB Handwash Tutorial"
          src="https://www.youtube.com/embed/tIwdf3WKe3Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Prevent;
