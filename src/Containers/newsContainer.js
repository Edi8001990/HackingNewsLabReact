import React, {Component, Fragment} from 'react';
import ArticleSelect from '../Components/ArticleSelect';
import ArticleDetails from '../Components/ArticleDetails';
import CommentForm from '../Components/CommentForm';
import Comment from '../Components/Comment';



class NewsContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      articles: [],
      selectedArticle: {},
      comment: ''

    }

  }


  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then((data) => {
        const newData = data.slice(0, 20);

        const promises = newData.map((id) => {

          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json());

        });

        console.log(promises);

        Promise.all(promises)
          .then((results) => {
            this.setState({ articles: results });
          });
      });
}


onArticleSelect(event){
      const articleSelected = this.state.articles[event];
      this.setState({selectedArticle: articleSelected});
}

handleCommentSubmit(submittedComment){
  this.setState({comment: submittedComment});


}






  render(){
    return(
      <Fragment>
      <ArticleSelect
      articles={this.state.articles}
      onArticleSelect={this.onArticleSelect.bind(this)}
      />


      <ArticleDetails
      title={this.state.selectedArticle.title}
      url={this.state.selectedArticle.url}
      score={this.state.selectedArticle.score}
      />

      <Comment
      comment={this.state.comment}
      />

      <CommentForm
      onCommentSubmit={this.handleCommentSubmit.bind(this)}
      />




      </Fragment>
    )
  }
}

export default NewsContainer;
