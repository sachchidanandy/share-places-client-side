import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './components/users/Users';
import NewPlace from './components/new_places/NewPlace';
import EditPlace from './components/new_places/EditPlace';
import MainNavigation from './components/common/navigation/MainNavigation';
import UserPlaces from './components/user_places/UserPlaces';
import Auth from './components/auth/Auth';
import './App.css';

export default () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={Users}/>
          <Route path='/:userId/places' exact component={UserPlaces}/>
          <Route exact path='/places/new' component={NewPlace}/>
          <Route exact path='/places/:placeId' component={EditPlace}/>
          <Route path='/auth' component={Auth}/>
          <Redirect to='/'/>
        </Switch>
      </main>
    </Router>
  );
}
