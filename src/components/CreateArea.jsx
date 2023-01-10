import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNoteContent((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleInput}
            value={noteContent.title}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleInput}
          value={noteContent.content}
          onClick={() => {
            setIsExpanded(true);
          }}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.handleClick(noteContent);
              setNoteContent({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
