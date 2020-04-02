import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const handleChange = e => {
    const userInput = e.target.value;
    setInput(userInput);
  };

  const handleSubmit = e => {
    console.log("Form - input", input);
    e.preventDefault();
  };
  return (
    <div>
      <form>
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
