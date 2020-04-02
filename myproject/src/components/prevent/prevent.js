import React from "react";

function Prevent() {
  return (
    <div>
      <div className="video">
        <h1>This is how you can help stop the spread!</h1>
        <p>Here is a handwashing tutorial by the one and only Alton Brown</p>
        <iframe
          title="AB Handwash Tutorial"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tIwdf3WKe3Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Prevent;
