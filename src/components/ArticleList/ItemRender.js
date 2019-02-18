import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './articlelist.css'

export default class ItemRender extends Component {
  state = {
    like: 0
  }

  render () {
    const { items, username, handleDelete } = this.props
    return (
      <div className='article' key={items.id}>
        <h3>
          {items.title.length >= 20
            ? items.title.slice(0, 17) + '...'
            : items.title}
        </h3>
        <Link to={`/home/${items.id}`}>
          <img
            src={items.pictures}
            height='300'
            width='200'
            alt={items.title}
          />
        </Link>
        <div className='del-like'>
          {username ? (
            <button
              className='btn-arrticles'
              onClick={() => {
                handleDelete(items.id)
              }}
            >
              del
            </button>
          ) : null}{' '}
          <p>{this.state.like}</p>
          <button
            className={
              this.state.like === 1 ? 'btn-arrticles--active' : 'btn-arrticles'
            }
            onClick={() => this.setState({ like: 1 })}
          >
            Like
          </button>
        </div>
      </div>
    )
  }
}
