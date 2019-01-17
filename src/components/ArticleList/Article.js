import React, { Component } from 'react'
import { myNews } from '../../article'

const News = props => {
  const news = myNews.get(parseInt(props.match.params.id, 10))
  if (!news) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{news.title}</h1>
    </div>
  )
}

export default News
