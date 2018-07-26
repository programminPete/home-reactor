import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import StarterApp from './StarterApp'
import Login from './Login'
import Calendar from './modules/calendar/Calendar'
import Todo from './modules/todo/Todo'
import Weather from './modules/weather/Weather'

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.requireAuth = requireAuth.bind(this);

  }
  requireAuth(nextState, replace) {
    console.log('in requireAuth')
    if(!this.state.isLoggedIn){
      replace({
        pathname: '/login'
      })
    }
  }

  render() {
    return(
      <Switch>
        <Route exact path='/' component={StarterApp} />
        <Route path='/login' component={Login} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/todo' component={Todo} />
        <Route path='/weather' component={Weather} onEnter={requireAuth} />
      </Switch>
    )
  }
}
export default Router
