import React, { Component } from 'react'
import './category.css'

export default class Category extends Component {
  render () {
    return (
      <div className='category-wrapper'>
        <ul className='nav-items'>
          <h3>Categorys</h3>
          <li className='nav-item__music'>Music</li>
          <li className='nav-item__science'>Science</li>
          <li className='nav-item__history'>History</li>
          <li className='nav-item__work'>Work</li>
        </ul>
      </div>
    )
  }
}
