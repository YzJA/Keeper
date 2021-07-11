import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [clicked, setClicked] = useState(false);
  const [rows, setRows] = useState("1");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  };

  const addHandler = () => {
    if (!note.title && !note.content) {
    } else {
      props.addHandler(note);
      setNote({ title: "", content: "" });
      setClicked(false);
      setRows("1");
    }
  };

  const btnHandler = (e) => {
    e.preventDefault();
    addHandler();
  };

  const clickHandler = () => {
    if (!clicked) {
      setClicked(true);
      setRows("3");
    }
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
      <form className="create-note">
        {clicked && (
          <input
            name="title"
            placeholder="Title"
            onChange={changeHandler}
            value={note.title}
          />
        )}
        <textarea
          onClick={clickHandler}
          name="content"
          placeholder="Take a note..."
          rows={rows}
          onChange={changeHandler}
          value={note.content}
        />
        {clicked && (
          <Zoom in={true}>
            <Fab onClick={btnHandler}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
};

export default CreateArea;
