import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./components/Home/home";
import Data from "./components/data/data";
import Prevent from "./components/prevent/prevent";

function App() {
  const [covidData, setCovidData] = useState("");
  //   const [country, setCountry] = useState("US");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState();

  const handleChange = e => {
    // const userInput = e.target.value;
    setInput(e.target.value);
    console.log("app handleChange", input);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // onSubmit(input);
  };

  useEffect(() => {
    const covidUrl = `https://api.covid19api.com/summary`;
    const makeApiCall = async () => {
      const res = await fetch(covidUrl);
      const json = await res.json();
      setCovidData(json);
    };
    makeApiCall();
  }, []);

  const [article, setArticle] = useState("");

  useEffect(() => {
    const articleUrl =
      "https://newsapi.org/v2/top-headlines?q=COVID&from=2020-03-20&sortBy=publishedAt&apiKey=93d0380b616c44ee82169a2f0fbe3cb1&pageSize=3&page=2";
    const makeApiCall = async () => {
      const res = await fetch(articleUrl);
      const json = await res.json();
      setArticle(json);
    };
    makeApiCall();
  }, []);

  return (
    <div className="main">
      <div>
        <nav className="nav">
          <Link to="/home" className="nav-item">
            <h1>Covid-19 Tracker</h1>
          </Link>
          <Link to="/data" className="nav-item">
            <h2>Statistics</h2>
          </Link>
          <Link to="/prevent" className="nav-item">
            <h2>How to Prevent</h2>
          </Link>
        </nav>

        <main>
          {/* <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search By Country"
                onChange={handleChange}
                value={input}
              />
              <button>Search</button>
            </form>
          </div> */}
          <Switch>
            <Route
              path="/home"
              render={data => <Home article={article} {...data} />}
            />
            <Route
              path="/data"
              render={data => (
                <Data
                  covidData={covidData}
                  {...data}
                  input={input}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
            />
            <Route path="/prevent" component={Prevent} />
            <Redirect to="/home" />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
