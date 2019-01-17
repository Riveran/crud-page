import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export default class Home extends Component {
  render () {
    return (
      <div className='head'>
        <Link className='home-link' to='/home'>
          <h2>Home</h2>
        </Link>
      </div>
    )
  }
}
