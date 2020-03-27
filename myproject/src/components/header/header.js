import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Data from '../data/data';
import App from '../../App';

function Header() {
  return (
    <div>
        <nav>
            <Link to= '/'>
                <h1>Covid - 19 Tracker</h1>
            </Link>
            <Link to = '/data'>
                <h2>Map</h2>
            </Link>
            <h2>Find your Location</h2>
        </nav>

        <main>
            <Switch>
                <Route exact path = '/' component={App}/>
                <Route path= '/data' component={Data}/>
            </Switch>
        </main>
    </div>
  );
}

export default Header;