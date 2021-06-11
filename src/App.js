import React, { useState } from "react";

export default function App() {
  const [editMode, setEditMode] = React.useState(false);
  const [formText, setFormText] = React.useState("This is my text");

  function handleChangeForm(e) {
    setFormText(e.target.value);
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div>
      Double click to edit
      {editMode ? (
        <div>
          <input name="form" value="form" onChange={handleChangeForm} />{" "}
          <button onClick={toggleEditMode}>Toggle Back</button>
        </div>
      ) : (
        <p onClick={toggleEditMode}>{formText}</p>
      )}
    </div>
  );
}