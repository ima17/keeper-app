import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleSubmit(noteContent) {
    setNotes((preValue) => {
      return [...preValue, noteContent];
    });
  }

  function handleDelete(id) {
    setNotes((preValue) => {
      return preValue.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleSubmit} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
