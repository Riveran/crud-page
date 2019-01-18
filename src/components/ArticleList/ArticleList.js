import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './articlelist.css'
import Articles from './Articles'
import News from './Article'

export default class ArticleList extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/home' component={Articles} />
          <Route path='/home/:id' component={News} />
        </Switch>
      </div>
    )
  }
}
