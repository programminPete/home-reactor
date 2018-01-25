import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import { GOOGLE_API_KEY } from '../config.js'
import GoogleCalendar from '../utils/GoogleCalendar'

// import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import './custom.css'
import styles from './Home.scss'

BigCalendar.momentLocalizer(moment)
const calendars = [
  {
    name: 'demo',
    url: 'kmcsvcr8du1l0k7le3pio56cqk@group.calendar.google.com'
  }
]
const dailyRecurrence = 100
const weeklyRecurrence = 50
const monthlyRecurrence = 10

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    this.getGoogleCalendarEvents()
  }

  getGoogleCalendarEvents = () => {

    GoogleCalendar.getAllCalendars(GOOGLE_API_KEY, calendars, dailyRecurrence, weeklyRecurrence, monthlyRecurrence)
      .then(events => this.setState({events}) )
      .catch(err => { throw new Error(err) })
  }

  render = () =>
    <div className="calendar-wrapper">
      <div className={styles['calendar-container']}>
        <BigCalendar events={this.state.events} />
      </div>
    </div>

}
