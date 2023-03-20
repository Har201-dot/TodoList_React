import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {
  
  const [visible,setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);
  };

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {visible && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={visible ? "3" : "1"}
        />
        <Zoom in={visible}>
          <Fab onClick={submitNote}> <NoteAddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
