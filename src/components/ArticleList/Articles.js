import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './articlelist.css'
import { connect } from 'react-redux'
import { deleteNews } from '../../actions/index'
import ItemRender from './ItemRender'

class Articles extends Component {
  state = {
    like: 0
  }

  render () {
    return <div className='article-wrapperr'>{this.getBody()}</div>
  }

  getBody = () => {
    const { article, category, username } = this.props
    let newArticle

    switch (category.category) {
      case 'All':
        newArticle = article.News
        break

      case 'Music':
        newArticle = article.News.filter(items => items.category === 'Music')
        break

      case 'Science':
        newArticle = article.News.filter(items => items.category === 'Science')
        break

      case 'History':
        newArticle = article.News.filter(items => items.category === 'History')
        break

      case 'Work':
        newArticle = article.News.filter(items => items.category === 'Work')
        break

      default:
        newArticle = article.News
        break
    }
    const body = newArticle.map(items => {
      return (
        <ItemRender
          key={items.id}
          items={items}
          username={username}
          handleDelete={this.handleDelete}
        />
      )
    })
    return body
  }

  handleDelete = id => {
    const { deleteNews } = this.props
    deleteNews(id)
  }
}

export default connect(
  state => {
    const { article, category, loggin } = state
    return {
      article: article,
      category: category,
      username: loggin.user
    }
  },
  { deleteNews }
)(Articles)
