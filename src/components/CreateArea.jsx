import React, { useState } from "react";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    event.preventDefault();
    const input = event.target.value;
    const inputName = event.target.name;
    setNoteContent((preValue) => {
      if (inputName === "title") {
        return {
          title: input,
          content: preValue.content,
        };
      } else if (inputName === "content") {
        return {
          title: preValue.title,
          content: input,
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleInput} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleInput}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.handleClick(noteContent);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
