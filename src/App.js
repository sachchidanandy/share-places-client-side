import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './components/users/Users';
import NewPlace from './components/new_places/NewPlace';
import EditPlace from './components/new_places/EditPlace';
import MainNavigation from './components/common/navigation/MainNavigation';
import UserPlaces from './components/user_places/UserPlaces';
import Auth from './components/auth/Auth';
import { AuthContext } from './components/common/utils/context/AuthContext';
import './App.css';

export default () => {
  const [ isLogin, setIsLogin ] = useState(false);

  const login = useCallback(() => {
    setIsLogin(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
  }, []);

  let routes = '';

  if (isLogin) {
    routes = <Switch>
      <Route exact path='/' component={Users}/>
      <Route path='/:userId/places' exact component={UserPlaces}/>
      <Route exact path='/places/new' component={NewPlace}/>
      <Route exact path='/places/:placeId' component={EditPlace}/>
      <Redirect to='/'/>
    </Switch>
  } else {
    routes = <Switch>
      <Route exact path='/' component={Users}/>
      <Route path='/:userId/places' exact component={UserPlaces}/>
      <Route path='/auth' component={Auth}/>
      <Redirect to='/auth'/>
    </Switch>
  }

  return (
    <AuthContext.Provider value={{isLogin, login, logout}}>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}
