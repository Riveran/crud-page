import React, { Component } from 'react'
import Category from './components/Category/Category'
import Add from './components/Add/Add'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Home />
        <div className='content-wrapper'>
          <Category />
          <Main />
          <Add />
        </div>
      </div>
    )
  }
}

export default App
