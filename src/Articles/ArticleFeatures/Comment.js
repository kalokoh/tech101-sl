import React, { useState, useContext, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { database, auth } from '../../Firebase';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';

import WebContext from '../../Context Container/WebContext';
import classes from './Comment.module.css';


export const CommentContext = React.createContext({
  readComment: []
});

const Comment = () => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const [readData, setReadData] = useState([]);
  const contxt = useContext(WebContext);
  const navigate = useNavigate();

  const commentValidityCheck = comment.trim().length !== 0;
  const commentCollectionRef = collection(database, "comment");
  const commentIsNotValid = !commentValidityCheck && error;

  useEffect(() => {
    getDocs(commentCollectionRef)
    .then(response =>{
      setReadData(response.docs.map(res => res.data()))
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])


  const updateData = () =>{
    const docToupdate = doc(database, "comment", "id");
    updateDoc(docToupdate, {
      user: "aliekalokoh",
      comment: "this is my comment",
      id: auth.currentUser.uid
    })
  }

   
  



  const onChangeCommentHandler = (e) =>{
    setComment(e.target.value);
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    setError(false);
    if(!commentValidityCheck){
      setError(true)
    console.log('comment is empty');
      return
    }
    else{
      if(contxt.users){
        window.location.reload();
        console.log('youre logged in');
        await addDoc(commentCollectionRef,  {
          id: auth.currentUser.uid,
          user: auth.currentUser.email,
          comment: comment})
      }else{
        navigate('/sign-up');
      }
      console.log('comment length is greater than zero');
      setComment("");
    }
    
    
  }

  return (
    <div>
    <form onSubmit={submitHandler} action="" className={classes.form} >
        <label htmlFor="comment">Leave your thought</label>
        <textarea onChange={onChangeCommentHandler} value={comment} name="comment" id="comment" cols="40" rows="4"></textarea>
        {commentIsNotValid && <p className={classes.error_message}>please enter info</p>}
        <button  className={classes.submitBtn}>Submit</button>
    </form>
    </div>
  )
}

export default Comment