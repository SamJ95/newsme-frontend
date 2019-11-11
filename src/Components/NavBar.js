import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function NavBar({userState, dispatch}) {
  const handleLogOut = () => {
    dispatch({type: 'CLEAR_USER'})
    dispatch({type: 'CLEAR_SUBS'})
  }

  return (
    <nav className='navbar is-link'>
      <div className='navbar-menu'>
        <div className='navbar-brand'>
        <NavLink className='navbar-item' to='/feed'>
          <span className='title brand'>NewsMe</span>
        </NavLink>
        </div>
        <div className='navbar-end'>
          <NavLink className='navbar-item' to='/edit'>
          Logged in as: {userState.user.email}
          </NavLink>
          <div className='navbar-item'>
            <button className='button is-danger' onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({ userState: state.user })

export default connect(
  mapStateToProps,
  null
)(NavBar)
