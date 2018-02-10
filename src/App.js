import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { HashRouter as Router, Route } from "react-router-dom"
import { ContactList, ContactInfo, ContactEdit } from "./components"

import { add_contact, update_contact, remove_contact } from "./store/actions"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 960px) 1fr;
  min-height: 100vh;
  width: 100%;
`

class App extends Component {
  render() {
    const { add, update, remove } = this.props
    const { contact } = this.props.state
    return (
      <Router>
        <Container>
          <Route
            exact
            path="/"
            render={props => <ContactList contacts={contact} {...props} />}
          />
          <Route
            path="/new"
            render={props => <ContactEdit submit={add} {...props} />}
          />
          <Route
            path="/contact/:id"
            render={props => (
              <ContactInfo remove={remove} contacts={contact} {...props} />
            )}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <ContactEdit submit={update} contacts={contact} {...props} />
            )}
          />
        </Container>
      </Router>
    )
  }
}

const state = state => ({
  state: state
})

const actions = dispatch => ({
  add: contact => dispatch(add_contact(contact)),
  update: contact => dispatch(update_contact(contact)),
  remove: id => dispatch(remove_contact(id))
})

export default connect(state, actions)(App)
