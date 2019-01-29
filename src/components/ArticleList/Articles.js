import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './articlelist.css'
import { connect } from 'react-redux'
import { deleteNews } from '../../actions/index'

class Articles extends Component {
  render () {
    console.log(this.props)
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

    const body = newArticle.map(items => (
      <div className='article' key={items.id}>
        <h3>
          {items.title.length >= 20
            ? items.title.slice(0, 17) + '...'
            : items.title}
        </h3>
        <Link to={`/home/${items.id}`}>
          <img
            src={items.pictures}
            height='300'
            width='200'
            alt={items.title}
          />
        </Link>
        <div className='del-like'>
          {username ? (
            <button
              className='btn-arrticles'
              onClick={() => {
                this.handleDelete(items.id)
              }}
            >
              del
            </button>
          ) : null}{' '}
          <button className='btn-arrticles'>Like</button>
        </div>
      </div>
    ))
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
