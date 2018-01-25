import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import StarterApp from './StarterApp'
import Calendar from './modules/calendar/Calendar'
import Todo from './modules/todo/Todo'
import Weather from './modules/weather/Weather'
import Ledstrip from './devmodules/ledstrip/Ledstrip'

class Router extends Component {
  render() {
    return(
      <Switch className="main-app-right">
        <Route exact path='/' component={StarterApp}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/todo' component={Todo}/>
        <Route path='/weather' component={Weather}/>
        <Route path='/ledstrip' component={Ledstrip}/>
      </Switch>
    )
  }
}
export default Router
