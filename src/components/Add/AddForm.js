import React, { Component } from 'react'
import './add.css'
import { connect } from 'react-redux'
import { createNews } from '../../actions/index'

class AddForm extends Component {
  state = {
    title: '',
    bigText: '',
    picture: '',
    category: 'All',
    agree: false
  }

  onBtnClickHandler = e => {
    const { title, bigText, picture, category } = this.state
    this.props.setNews({
      id: +new Date(),
      title,
      bigText,
      picture,
      category
    })
  }

  handleChangeCheckBox = e => {
    this.setState({ agree: e.currentTarget.checked })
  }

  handleChange = e => {
    const { id } = e.currentTarget
    this.setState({ [id]: e.currentTarget.value })
  }

  validate = () => {
    const { title, bigText, picture, category, agree } = this.state
    if (
      title.trim() &&
      bigText.trim() &&
      picture.trim() &&
      category.trim() &&
      agree
    ) {
      return true
    }

    return false
  }

  render () {
    const { title, bigText, picture, category } = this.state
    return (
      <div>
        <form className='add'>
          <input
            id='title'
            type='text'
            className='add__author'
            placeholder='Заголовок новости'
            onChange={this.handleChange}
            value={title}
          />
          <textarea
            id='bigText'
            className='add__text'
            onChange={this.handleChange}
            placeholder='Текст новости'
            value={bigText}
          />
          <input
            id='picture'
            type='text'
            className='add__author'
            onChange={this.handleChange}
            placeholder='url картинки'
            value={picture}
          />
          <select id='category' value={category} onChange={this.handleChange}>
            <option>Music</option>
            <option>Science</option>
            <option>History</option>
            <option>Work</option>
          </select>
          <label className='add__checkrule'>
            <input type='checkbox' onChange={this.handleChangeCheckBox} /> Я
            согласен с правилами
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}
          >
            Add news
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNews: news => dispatch(createNews(news))
  }
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(AddForm)
