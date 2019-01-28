import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './articlelist.css'
import { connect } from 'react-redux'

class Articles extends Component {
  render () {
    localStorage.setItem('asdasdasd', 'asdasdasd')
    const { article, category } = this.props
    console.log(category.category)
    return <div className='article-wrapperr'>{this.getBody()}</div>
  }

  getBody = () => {
    const { article, category } = this.props
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
      </div>
    ))
    return body
  }
}

/* const mapStateToProps = state => {
  return { article: state.article, category: state.category }
} */

export default connect(state => {
  const { article, category } = state
  return {
    article: article,
    category: category
  }
})(Articles)
