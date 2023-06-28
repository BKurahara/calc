import React from "react";
import { useState } from "react";

const Action = ({ ActionSubmit }) => {
  const [action, setAction] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    ActionSubmit(action);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        onChange={(e) => setAction(e.target.value)}
        value={action}
      />
      <button onClick={handleFormSubmit} value="OK">
        ok
      </button>
    </form>
  );
};

export default Action;
