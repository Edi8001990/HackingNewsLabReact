import React from 'react';


const ArticleDetails = (props)=>{
  return (
          <div>

              <h1>{props.title}</h1>
                <h2>{props.score}</h2>
                  <h3>{props.url}</h3>

          </div>

  )
}

export default ArticleDetails;
