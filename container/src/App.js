import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Manually creating a browser history so we can interact with it programatically and
// pass what we need down to child applications which need to be able to influence it
// and make redirects easier.
const history = createBrowserHistory()

export function App() {
  return (
    <main>
      <Router history={history}>
        <Switch>
          {/* Not an exact path so will route /auth/anything through to our auth application */}
          <Route path="/auth">
            <h1>Hello this is the authentication page</h1>
          </Route>
          <Route path="/">
            <h1>Hello this is the news feed</h1>
          </Route>
        </Switch>
      </Router>
    </main>
  )
}
