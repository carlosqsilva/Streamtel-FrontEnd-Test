import React from "react"
import styled from "styled-components"
import { Header } from "./Header"
import { EditButton, RemoveButton } from "../Buttons"

const Wrapper = styled.div`
  grid-column: 2;
  position: relative;
`

const Container = styled.div`
  padding: 20px;
  display; flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Item = styled.div`
  margin-bottom: 15px;
  > p {
    margin: 0;
  }
  > a {
    text-decoration: none;
    color: #616161;
  }
`

const ContactInfo = ({ match, contacts, remove, history }) => {
  const id = match.params.id
  const { picture, name, last_name, phone, email, address } = contacts.find(
    contact => contact.id === id
  )
  return (
    <Wrapper>
      <Header background={picture}>
        <p>
          <span>{name}</span> <span>{last_name}</span>
        </p>
        <RemoveButton
          onClick={() => {
            history.push("/")
            remove(id)
          }}
        />
        <EditButton to={`/edit/${id}`} />
      </Header>
      <Container>
        {phone && (
          <Item>
            <p>Telefone</p>
            <a href={`tel:${phone}`}>{phone}</a>
          </Item>
        )}
        {email && (
          <Item>
            <p>Email</p>
            <a href={`mailto:${email}`}>{email}</a>
          </Item>
        )}
        {address && (
          <Item>
            <p>Endereço</p>
            <a>{address}</a>
          </Item>
        )}
      </Container>
    </Wrapper>
  )
}

export default ContactInfo
