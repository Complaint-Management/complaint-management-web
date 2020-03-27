/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MainPage from './MainPage';
import createTicket from './createTicket';
import viewHistory from './viewHistory';
import viewOpenTickets from './viewOpenTickets';
function App() {
  return (

    <Router>
      <Switch>
        <Route path="/create-new-ticket" component={createTicket}/>
        <Route path="/view-open-tickets" component={viewOpenTickets}/>
        <Route path="/history" component={viewHistory}/>
        <Route exact path="/" component={MainPage}>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;