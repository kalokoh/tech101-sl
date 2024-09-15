import React from 'react';
import classes from './CommentButton.module.css';
import { useState } from "react";
import Comment from './Comment';


const CommentButton = () => {
    const [showComment, setShowComment] = useState(false);
  return (
    <>
    {showComment && <Comment />}
    <div className={classes.button_container}>
       <button onClick={() => setShowComment(!showComment)}>{!showComment ? 'Add Comment' : 'Cancel Comment'}</button>
    </div> 
    </>    
  )
}

export default CommentButton