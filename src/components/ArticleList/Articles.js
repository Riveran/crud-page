import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { myNews } from '../../article'

export default class Articles extends Component {
  render () {
    return <div>{this.getBody()}</div>
  }

  getBody = () => {
    const body = myNews.all().map(items => (
      <div key={items.id}>
        <Link to={`/home/${items.id}`}>{items.title}</Link>
      </div>
    ))
    return body
  }
}
