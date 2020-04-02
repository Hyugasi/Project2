import React from "react";
import Article from "../articles/article";
import Footer from "../footer/footer";
import "./home.css";

function Home(props) {
  //console.log('the props in home',props)
  return (
    <div>
      <div className="gif">
        <iframe
          title="world"
          src="https://giphy.com/embed/llCMePepHIqmv1ZYoN"
          width="100%"
          height="100%"
          // style="position:absolute"
          frameBorder="0"
          // className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <Article article={props.article.articles} />
      <Footer />
    </div>
  );
}

export default Home;
