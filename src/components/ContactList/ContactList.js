import React from "react"
import styled from "styled-components"
import { SearchInput } from "./SearchInput"
import { Contact } from "./ContactCard"
import { AddButton } from "../Buttons"

const Wrapper = styled.div`
  grid-column: 2;
  padding: 110px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class ContactList extends React.Component {
  state = {
    filter: ""
  }

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value })
  }

  render() {
    const { contacts } = this.props
    const { filter } = this.state
    return (
      <React.Fragment>
        <SearchInput
          onChange={this.handleFilter}
          placeholder="Buscar contato..."
        />
        <Wrapper>
          {contacts
            .filter(
              _ =>
                _.name.toLowerCase().includes(filter.toLowerCase()) ||
                _.email.includes(filter)
            )
            .map(contact => <Contact key={contact.id} {...contact} />)}
          <AddButton to="/new" />
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default ContactList
