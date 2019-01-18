import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './articlelist.css'
import { connect } from 'react-redux'

class Articles extends Component {
  render () {
    return <div className='article-wrapperr'>{this.getBody()}</div>
  }

  getBody = () => {
    const { article } = this.props
    const body = article.myNews.all().map(items => (
      <div className='article' key={items.id}>
        <h3>{items.title}</h3>
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

const mapStateToProps = state => ({
  article: state.article
})

export default connect(mapStateToProps)(Articles)
