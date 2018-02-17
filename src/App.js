import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Info from "./Routes/Info"
import Edit from "./Routes/Edit"

import { add_contact, update_contact, remove_contact } from "./store/actions"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 960px) 1fr;
  min-height: 100vh;
  width: 100%;
`

const App = ({ add, update, remove, ...props }) => {
  const { contact } = props.state
  return (
    <Router>
      <Container>
        <Route
          exact
          path="/"
          render={props => <Home contacts={contact} {...props} />}
        />
        <Route
          path="/contact/:id"
          render={props => (
            <Info remove={remove} contacts={contact} {...props} />
          )}
        />
        <Route path="/new" render={props => <Edit submit={add} {...props} />} />
        <Route
          path="/edit/:id"
          render={props => (
            <Edit submit={update} contacts={contact} {...props} />
          )}
        />
      </Container>
    </Router>
  )
}

const state = state => ({
  state
})

const actions = dispatch => ({
  add: contact => dispatch(add_contact(contact)),
  update: contact => dispatch(update_contact(contact)),
  remove: id => dispatch(remove_contact(id))
})

export default connect(state, actions)(App)
