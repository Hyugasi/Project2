import React from "react";

function Article(props) {
  if (!props.article) {
    return <></>
  }
  console.log('the props in article', props.article)


  return (
    <div>
      this is an article eventually
      {/* {articles} */}
    </div>
  );
}

export default Article;
