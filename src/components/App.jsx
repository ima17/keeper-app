import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../note";

function App() {
  return (
    <div>
      <Header />
      {notes.map(note=>
      <Note key={note.key} content={note.content} title={note.title} />
      )}
      <Footer />
    </div>
  );
}

export default App;
