import React, { Fragment } from 'react';
import './App.css';
import Main from './Component/Main';
import Login from './Component/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Main exact path="/main" component={Main}/>
      </Switch>
      </BrowserRouter>
    );
}

export default App;
