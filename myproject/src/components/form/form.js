import React, { useState } from "react";
import "./form.css";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChange = e => {
    const userInput = e.target.value;
    setInput(userInput);
  };

  const handleSubmit = e => {
    console.log("Form - input", input);
    e.preventDefault();
    props.onSubmit(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search By Country"
          onChange={handleChange}
          value={input}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Form;
