import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import { useSpring, animated } from 'react-spring';
import AddIcon from '@material-ui/icons/Add';
import ClickAwayListener from 'react-click-away-listener';

const NoteInput = ({handleAdd, setIsAddTransition}) => {

  const [isActive, setIsActive] = useState(false);

  const divStyle = useSpring({
    boxShadow: isActive ? "0 0 10px 0 rgba(0, 0, 0, 0.3)" : "0 0 0px 0 rgba(0, 0, 0, 0.3)"
  });

  const expandStyle = useSpring({
    opacity: isActive ? 1 : 0,
    display: isActive ? "block" : "none"
  });

  const buttonStyle = useSpring({
    opacity: isActive ? 1 : 0,
    height: isActive ? "15px" : "0px",
    transform: isActive ? "scale(1)" : "scale(0)" 
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div
      className="input-container"
    >
      <ClickAwayListener onClickAway={() => setIsActive(false)}>
        <animated.div
          className={`input-div`}
          style={divStyle}
          onClick={() => setIsActive(true)}
        >
          <animated.div
            style={expandStyle}
          >
            <Input 
              className="input input-title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </animated.div>
          <Input 
            className="input input-title"
            type="textarea"
            placeholder="Take a Note"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <animated.div
            style={buttonStyle}
            className="btn-div"
          >
            <Button
              className={`btn btn-add`}
              onClick={ () => {
                setIsAddTransition(true);
                handleAdd({
                  title: title,
                  body: body
                })
                setTitle("");
                setBody("");
                }
              }
            ><AddIcon />
            </Button>
          </animated.div>
          </animated.div>
      </ClickAwayListener>
    </div>
    )
}

export default NoteInput;
