import React from "react";
import Article from "../articles/article";
import Footer from "../footer/footer";
import "./home.css";

function Home(props) {
  //console.log('the props in home',props)
  return (
    <div>
      <div className="image">
        <img
          alt="world"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        />
      </div>
      <Article article={props.article.articles} />
      <Footer />
    </div>
  );
}

export default Home;
