import React, {Component} from 'react';


class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state={
      comment: ''
    }
  }

handleSubmit(event){
  event.preventDefault();
  const comment = this.state.comment.trim();
  if(!comment){
    return
  }
  this.props.onCommentSubmit({comment: comment});
  this.setState({comment: ''});
}

handleCommentChange(event){
  this.setState({comment: event.target.value});
}

render(){
  return(
    <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
    <textarea rows="7" cols="75" value={this.state.comment} onChange={this.handleCommentChange.bind(this)}></textarea>
    <input type="submit" value="Post"/>
    </form>
  )

}

}

export default CommentForm;
