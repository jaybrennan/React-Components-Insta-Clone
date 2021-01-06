// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import dummyData from "../../dummy-data"
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [allComments, addComment] = useState(props.comments);
  let [currentComments, UpdateComment] = useState('')


  console.log(dummyData)


  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {allComments.map(userComments => {
        return <Comment comment = {userComments} />
      })}
      
      <CommentInput />
      
    </div>
  );
};

export default CommentSection;
