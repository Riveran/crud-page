import React, { Component } from 'react'
import { connect } from 'react-redux'
import './category.css'

class Category extends Component {
  state = {
    category: ''
  }

  handleClick = e => {
    console.log(e.currentTarget.dataset.category)
    this.setState({
      category: e.currentTarget.dataset.category
    })
  }

  render () {
    const { article, category } = this.props
    return (
      <div className='category-wrapper'>
        <ul className='nav-items'>
          <h3>Categorys</h3>
          <li
            data-category='all'
            className='nav-item__all'
            onClick={this.handleClick}
          >
            All [{article.News.length}]
          </li>
          <li
            data-category='music'
            className='nav-item__music'
            onClick={this.handleClick}
          >
            Music [
            {article.News.filter(item => item.category === 'Music').length}]
          </li>
          <li
            data-category='science'
            className='nav-item__science'
            onClick={this.handleClick}
          >
            Science [
            {article.News.filter(item => item.category === 'Science').length}]
          </li>
          <li
            data-category='history'
            className='nav-item__history'
            onClick={this.handleClick}
          >
            History [
            {article.News.filter(item => item.category === 'History').length}]
          </li>
          <li
            data-category='work'
            className='nav-item__work'
            onClick={this.handleClick}
          >
            Work [{article.News.filter(item => item.category === 'Work').length}
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
