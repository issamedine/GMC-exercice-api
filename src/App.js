import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Users from './components/users'
import Posts from './components/posts'
import Comments from './components/comments'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/posts/:id" render={props => <Posts {...props} />} />
          <Route exact path="/comments/:nb" render={props => <Comments {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
