import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const NoteBlock = ({id, title, body, handleDelete}) => {
  return (
    <div className="bg-light border note-block">
      <h6>{title}</h6>
      <p>{body}</p>
      <DeleteIcon 
        className='delete-icon'
        onClick={() => handleDelete(id)}
      />
    </div>
  )
}

export default NoteBlock;