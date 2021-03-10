import React from 'react'
import { Link } from 'react-router-dom'

export function Header({ user, onSignOut }) {
  return (
    <header>
      <h1>🙌</h1>
      <Link
        to={user ? '/' : '/auth/signin'}
        onClick={() => user && onSignOut && onSignOut()}
      >
        {user ? 'Logout' : 'Login'}
      </Link>
    </header>
  )
}
