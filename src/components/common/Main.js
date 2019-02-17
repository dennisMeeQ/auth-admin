import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from '../home/HomePage';
import User from '../user/User';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/user' component={User}/>
    </Switch>
  </main>
)

export default Main;