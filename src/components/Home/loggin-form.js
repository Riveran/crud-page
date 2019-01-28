import React, { Component } from 'react'

export default class LoginForm extends Component {
  state = {
    logginStatus: false,
    username: '',
    password: ''
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName
    this.setState(prev => ({
      ...prev,
      [fieldName]: value
    }))
  }

  render () {
    const { username, password } = this.state
    return (
      <div className='loggin-block'>
        <form className='loggin-form'>
          <input
            data-field-name={'username'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={username}
            className='setloggin'
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
            className='setpassword'
          />
          <button className='loggin-btn'>Submit</button>
        </form>
      </div>
    )
  }
}
