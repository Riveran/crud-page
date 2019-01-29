import React, { Component } from 'react'

export default class Start extends Component {
  render () {
    return (
      <div>
        <h3>Для начала работы, нажмите "Home"</h3>
        <p>
          Для возможности удаления новостей введите <br /> Имя: Admin <br />
          Пароль: 12345
        </p>
        Feedback: <a href='https://github.com/Riveran'>GitHub</a>{' '}
        <a href='https://t.me/Riveran'>Telegram</a>
      </div>
    )
  }
}
