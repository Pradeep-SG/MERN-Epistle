import React from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const Header = () => {
  return (
    <header>
      <NoteAddIcon className='logo-icon'/>
      <h3>Epistle</h3>
    </header>
  )
}

export default Header;
