import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MainLayout from './layouts/mainLayout'
import SearchLayout from './layouts/searchLayout'
import Home from './components/home'
import UserList from './components/userList'
import WidgetList from './components/widgetList'
import UserProfile from './components/userProfile'

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
        </Route>
        <Route path=":userId" component={UserProfile} />
      </Route>

      <Route path="widgets">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>
      </Route>

    </Route>
  </Router>
);

