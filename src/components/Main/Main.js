import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AddForm from '../Add//AddForm'
import ArticleList from '../ArticleList/ArticleList'
import './main.css'

export default class Main extends Component {
  render () {
    return (
      <div className='main-wrapper'>
        <Switch>
          <Route path='/home' component={ArticleList} />
          <Route path='/add' component={AddForm} />
        </Switch>
      </div>
    )
  }
}
