import React, { Component } from 'react'
import './add.css'

export default class AddForm extends Component {
  handleAddNews = () => {}

  handleClick = () => {}

  render () {
    return (
      <div>
        <form className='add'>
          <input
            type='text'
            className='add__author'
            placeholder='Заголовок новости'
          />
          <textarea className='add__text' placeholder='Текст новости' />
          <input
            type='text'
            className='add__author'
            placeholder='url картинки'
          />
          <select>
            <option>Выбор категории</option>
            <option>Music</option>
            <option>Science</option>
            <option>History</option>
            <option>Work</option>
          </select>
          <label className='add__checkrule'>
            <input type='checkbox' /> Я согласен с правилами
          </label>
          <button className='add__btn' onClick={this.onBtnClickHandler}>
            Add news
          </button>
        </form>
      </div>
    )
  }
}
