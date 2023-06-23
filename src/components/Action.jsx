import React from "react";
import { useState } from "react";

const Action = ({ handleSubmit }) => {
  const [action, setAction] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(action);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        onChange={(e) => setAction(e.target.value)}
        value={action}
      />

      <input type="submit" value="OK" />
    </form>
  );
};

export default Action;
