import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions/index'

class LoginForm extends Component {
  state = {
    redirectToPreviousRoute: false,
    username: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
        password
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
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
    const { username, password, redirectToPreviousRoute } = this.state
    const { errorMsg } = this.props
    if (redirectToPreviousRoute) {
      return <div className='loggin-block'>Привет, {this.state.username}</div>
    }
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
          {errorMsg ? <p className='error'>{errorMsg}</p> : null}
          <button className='loggin-btn' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMsg: state.loggin.errorMsg
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
