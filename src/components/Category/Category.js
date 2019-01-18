import React, { Component } from 'react'
import { connect } from 'react-redux'
import './category.css'

class Category extends Component {
  handleClick = e => {
    console.log(e.currentTarget)
  }

  render () {
    const { article, category } = this.props
    /* Необходима константа которая будет получать категорию и фильтровать новости */
    console.log(article.myNews.news, category)
    return (
      <div className='category-wrapper'>
        <ul className='nav-items'>
          <h3>Categorys</h3>
          <li className='nav-item__all' onClick={this.handleClick}>
            All [{article.myNews.news.length}]
          </li>
          <li className='nav-item__music'>
            Music [
            {
              article.myNews.news.filter(item => item.category === 'Music')
                .length
            }
            ]
          </li>
          <li className='nav-item__science'>
            Science [
            {
              article.myNews.news.filter(item => item.category === 'Science')
                .length
            }
            ]
          </li>
          <li className='nav-item__history'>
            History [
            {
              article.myNews.news.filter(item => item.category === 'History')
                .length
            }
            ]
          </li>
          <li className='nav-item__work'>
            Work [
            {
              article.myNews.news.filter(item => item.category === 'Work')
                .length
            }
            ]
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
  category: state.category
})

export default connect(mapStateToProps)(Category)
