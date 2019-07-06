import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import NavBar from './components/NavBar'
import Profile from './profile'
import Main from './main'
import PrivateRoute from './components/PrivateRoute'
import Login from './login'

const App = () => {
  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/private" component={Main} />
        <Main path="/" component={Main} />
        <Login path="/login" />
      </Router>
    </Layout>
  )
}

export default App
