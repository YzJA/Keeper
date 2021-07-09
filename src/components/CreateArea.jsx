import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  };

  const addHandler = () => {
    props.addHandler(note);
    setNote({ title: "", content: "" });
  };

  const btnHandler = (e) => {
    e.preventDefault();
    addHandler();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addHandler();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={changeHandler}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeHandler}
          value={note.content}
        />
        <button onClick={btnHandler}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
