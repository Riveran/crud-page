import React, { Component } from 'react'
import { myNews } from '../../article'
import { Route, Switch } from 'react-router-dom'
import './articlelist.css'
import Articles from './Articles'
import News from './Article'

export default class ArticleList extends Component {
  render () {
    return (
      <div className='article-wrapper'>
        <Switch>
          <Route exact path='/home/' component={Articles} />
          <Route path='/home/:id' component={News} />
        </Switch>
      </div>
    )
  }
}
