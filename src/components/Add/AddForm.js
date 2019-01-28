import React, { Component } from 'react'
import './add.css'
import { connect } from 'react-redux'
import { createNews } from '../../actions/index'

class AddForm extends Component {
  state = {
    title: '',
    bigText: '',
    pictures: '',
    category: ''.toLowerCase(),
    agree: false
  }

  onBtnClickHandler = e => {
    e.preventDefault()
    const { title, bigText, pictures, category } = this.state
    this.props.createNews({
      id: +new Date(),
      title,
      bigText,
      pictures,
      category
    })
    this.setState({
      title: '',
      bigText: '',
      image: '',
      category: '',
      agree: false
    })
    this.props.history.push('/')
  }

  handleChangeCheckBox = e => {
    this.setState({ agree: e.currentTarget.checked })
  }

  handleChange = e => {
    const { id } = e.currentTarget
    this.setState({ [id]: e.currentTarget.value })
  }

  validate = () => {
    const { title, bigText, pictures, category, agree } = this.state
    if (
      title.trim() &&
      bigText.trim() &&
      pictures.trim() &&
      category.trim() &&
      agree
    ) {
      return true
    }

    return false
  }

  render () {
    const { title, bigText, pictures, category } = this.state
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
            id='pictures'
            type='text'
            className='add__author'
            onChange={this.handleChange}
            placeholder='url картинки'
            value={pictures}
          />
          <select id='category' value={category} onChange={this.handleChange}>
            <option>Выберите категорию</option>
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
    createNews: payload => {
      dispatch(createNews(payload))
    }
  }
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(AddForm)
