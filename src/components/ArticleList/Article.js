import React from 'react'
import { connect } from 'react-redux'

const News = props => {
  const { article } = props

  const news = article.News.filter(
    items => items.id === parseInt(props.match.params.id, 10)
  )

  return news.map(item => (
    <div className='news-wrapper'>
      <h2>{item.title}</h2>
      <img
        className='news-pictures'
        src={item.pictures}
        height='400'
        width='470'
        alt={item.title}
      />
      <p>{item.bigText}</p>
      <i>{item.date}</i>
    </div>
  ))
}

const mapStateToProps = state => ({
  article: state.article
})

export default connect(mapStateToProps)(News)
