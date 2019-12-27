import React, { useState } from "react";
import { Prompt } from "react-router-dom";

const FormPage = () => {
  const [unsaved, setUnsaved] = useState(false);
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
    setUnsaved(e.target.value !== "");
  };

  return (
    <div>
      <Prompt when={unsaved} message="Are you sure?" />
      {unsaved ? "Unsaved " : "Saved "}
      <input type="text" onChange={handleChange} value={text} />
    </div>
  );
};

export default FormPage;
