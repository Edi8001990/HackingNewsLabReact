import React from 'react';

const ArticleSelect = (props) =>{
  const options = props.articles.map((article, index)=>{
    return <option key={index} value={index}>{article.title}</option>
  })

  function handleChange(event){
    props.onArticleSelect(event.target.value)
  }

  return(
    <select id="article-selecor" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose an article...</option>
        {options}
    </select>

  )

}
export default ArticleSelect;
