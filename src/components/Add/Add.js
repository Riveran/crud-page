import React, { Component } from 'react'
import './add.css'
import { Link } from 'react-router-dom'

export default class Add extends Component {
  render () {
    return (
      <div className='add'>
        <Link to='/add/'>
          <button className='add-item'>Add</button>
        </Link>
        <p>Нажмите для добавления новости</p>
      </div>
    )
  }
}
