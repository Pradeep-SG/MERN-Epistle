import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NoteBlock from "./NoteBlock";

const NoteDiv = ({notes, handleDelete, isAddTransition, setIsAddTranistion}) => {

  return (
    <div className='note-div'>
        <TransitionGroup component="div"
          className="container"
        >
        {notes.map( (note) => (
          <CSSTransition
            key={note._id}
            in={isAddTransition} 
            timeout={300} 
            classNames="transition"
          >
          <NoteBlock
              key={note._id}
              id={note._id}
              title={note.title}
              body={note.body}
              handleDelete={(id) => handleDelete(id)}
            />
          </CSSTransition>
        ))}
        </TransitionGroup>
    </div>
  )
}

export default NoteDiv;