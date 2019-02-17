import React from 'react';
import { Switch, Route } from 'react-router-dom'

import UserOverviewPage from './UserOverviewPage';
import UserDetailPage from './UserDetailPage'

const User = () => (
    <Switch>
      <Route exact path='/user' component={UserOverviewPage}/>
      <Route path='/user/:id' component={UserDetailPage}/>
    </Switch>
  )

export default User;