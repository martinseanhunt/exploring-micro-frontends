import React, { useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Header } from './components/layout/Header'

// Manually creating a browser history so we can interact with it programatically and
// pass what we need down to child applications which need to be able to influence it
// and make redirects easier.
const history = createBrowserHistory()

export function App() {
  // user state to be passed down to all micro FE's and set via a callback passed to auth.
  // in the real world this state could be stored in some global state management solution or just a context along
  // with anything else we want to store globally.
  const [user, setUser] = useState(null)

  return (
    <Router history={history}>
      <Header user={user} onSignOut={() => setUser(null)} />
      <main>
        <Switch>
          {/* Not an exact path so will route /auth/anything through to our auth application */}
          <Route path="/auth">
            <h1>Hello this is the authentication page</h1>
          </Route>
          <Route path="/">
            <h1>Hello this is the news feed</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
