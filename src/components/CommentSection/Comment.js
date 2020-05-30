// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';
import allComments from '../CommentSection/CommentSectionContainer'

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      {' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};


export default Comment;
