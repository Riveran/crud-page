import React from 'react'
import { connect } from 'react-redux'

const News = ({ article: { News }, match }) => {
  const news = News.find(({ id }) => id === +match.params.id)

  if (!news) {
    return <div>Sorry, but the news was not found</div>
  }

  return (
    <div className='news-wrapper'>
      <h2>{news.title}</h2>
      <img
        className='news-pictures'
        src={news.pictures}
        height='400'
        width='470'
        alt={news.title}
      />
      <p>{news.bigText}</p>
      <i>{news.date}</i>
    </div>
  )
}

const mapStateToProps = state => ({
  article: state.article
})

export default connect(mapStateToProps)(News)
