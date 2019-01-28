import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../../actions/index'
import './category.css'

class Category extends Component {
  handleClick = e => {
    const getCategory = e.currentTarget.dataset.category
    console.log('click', getCategory)

    this.props.setCategory(getCategory)
  }

  render () {
    const { article, category } = this.props
    return (
      <div className='category-wrapper'>
        <ul className='nav-items'>
          <h3>Categorys</h3>
          <button
            className='btn'
            data-category='All'
            onClick={this.handleClick}
          >
            <li>All [{article.News.length}]</li>
          </button>
          <button
            className='btn'
            data-category='Music'
            onClick={this.handleClick}
          >
            <li>
              Music [
              {article.News.filter(item => item.category === 'Music').length}]
            </li>
          </button>
          <button
            className='btn'
            data-category='Science'
            onClick={this.handleClick}
          >
            <li>
              Science [
              {article.News.filter(item => item.category === 'Science').length}]
            </li>
          </button>
          <button
            className='btn'
            data-category='History'
            onClick={this.handleClick}
          >
            <li>
              History [
              {article.News.filter(item => item.category === 'History').length}]
            </li>
          </button>
          <button
            className='btn'
            data-category='Work'
            onClick={this.handleClick}
          >
            <li>
              Work [
              {article.News.filter(item => item.category === 'Work').length}]
            </li>
          </button>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article
})

const mapDispatchToProps = dispatch => {
  return {
    setCategory: category => dispatch(setCategory(category))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
