import React from "react";
import Article from "../articles/article";
import Footer from "../footer/footer";

function Home(props) {
  //console.log('the props in home',props)
  return (
    <div>
      <div>
        <iframe
          title="world"
          src="https://giphy.com/embed/llCMePepHIqmv1ZYoN"
          width="100%"
          height="100%"
          // style="position:absolute"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/spin-earth-earthday-llCMePepHIqmv1ZYoN">
          via GIPHY
        </a>
      </p>
      <Article article={props.article.articles} />
      <Footer />
    </div>
  );
}

export default Home;
