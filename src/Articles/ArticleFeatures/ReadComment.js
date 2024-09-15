import React from 'react';
import classes from './ReadComment.module.css';
import { useState, useEffect } from 'react';
import { database } from '../../Firebase';
import { collection, getDocs } from 'firebase/firestore';



const ReadComment = () => {
const commentCollectionRef = collection(database, 'comment');
const [readComment, setReadComment] = useState([{name: 'alie kalokoh'}]);

const showComment = readComment.length > 0;
console.log(showComment);

  
   useEffect(() => {
     getDocs(commentCollectionRef)
     .then(response => {
      setReadComment(response.docs.map(res => res.data()));
     })
     .catch(error =>{
        console.log(error);
     })
   }, [commentCollectionRef])
   


  return (
    <>
      <h2>Comments</h2>

    {showComment ? <div className={classes.comment_container}>
    {readComment.map(data =>{
     return( 
      <>
      <div className={classes.comment}>
      <p className={classes.user} >{data.user}</p>
      <p className={classes.comment_details} >{data.comment}</p>
      </div>
      </>
      )
    })} 
   </div> : <p className={classes.comment_loading}>Comment Loading...</p>}
   </>

  )
}

export default ReadComment