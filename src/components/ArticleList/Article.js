import React from 'react'
import { connect } from 'react-redux'

const News = props => {
  const { article } = props
  const news = article.myNews.get(parseInt(props.match.params.id, 10))
  if (!news) {
    return <div>Sorry, but the news was not found</div>
  }
  return (
    <div>
      <h3>{news.title}</h3>
      <img height='400' width='470' src={news.pictures} alt={news.title} />
      <p>{news.bigText}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  article: state.article
})

export default connect(mapStateToProps)(News)
