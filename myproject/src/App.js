import React from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home/home';
import Data from './components/data/data'
import Prevent from './components/prevent/prevent'

function App() {
  return (
    <div>
      <div>
        <nav>
            <Link to = '/home'>
                <h1>Covid-19 Tracker</h1>
            </Link>
            <Link to = '/data'>
                <h2>Statistics</h2>
            </Link>
            <Link to = '/prevent'>
                <h2>How to Prevent</h2>
            </Link>
        </nav>

        <main>
            <Switch>
                <Route path = '/home' component = {Home}/>
                <Route path= '/data' component={Data}/>
                <Route path = '/prevent' component={Prevent} />
                <Redirect to= '/home'/>
            </Switch>
        </main>
    </div>
    </div>
  );
}

export default App;
