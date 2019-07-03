import React, {Component} from 'react';


const Comment = (props) => {

    // const comment = props.comment
    // console.log(comment);
    return(
      <div>
        <p>{props.comment.comment}</p>
      </div>

    )

}

export default Comment;
