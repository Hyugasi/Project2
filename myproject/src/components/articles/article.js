import React from "react";
import "./article.css";

function Article(props) {
  if (!props.article) {
    return <></>;
  }

  const articles = props.article.map((i, e) => {
    return (
      <div className="article" key={e}>
        <a href={i.url} target="_blank" rel="noopener noreferrer">
          <img src={i.urlToImage} alt="article" />
          <h2>{i.title}</h2>
          <p>{i.description}</p>
        </a>
      </div>
    );
  });

  return (
    <div className="articleReturn">
      <h1>Articles</h1>
      {articles}
      <p>
        Got all articles from:{" "}
        <a
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NewsAPI
        </a>
      </p>
    </div>
  );
}

export default Article;
