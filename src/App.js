/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MainPage from './MainPage';
import createTicket from './createTicket';
import viewHistory from './viewHistory';
import viewOpenTickets from './viewOpenTickets';
import Login from './Login';
function App() {
  return (

    <Router>
      <Switch>
        <Route path="/create-new-ticket" component={createTicket}/>
        <Route path="/view-open-tickets" component={viewOpenTickets}/>
        <Route path="/history" component={viewHistory}/>
        <Route exact path="/Home" component={MainPage}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    </Router>
  );
}


export default App;