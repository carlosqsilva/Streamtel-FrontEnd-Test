import React from "react"
import styled from "styled-components"
import { EditButton } from "../Components/Buttons"
import { NavBar } from "../Components/NavBar"
import image from "../Assets/photo.svg"

const Wrapper = styled.div`
  grid-column: 2;
  padding-top: 55px;
`

const Container = styled.div`
  padding: 20px;
  display: flex;
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

const Header = styled.div`
  background: #29b6f6
    url(${props => (props.background ? props.background : image)}) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 20px 20px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 45vh;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  > p {
    margin: 0;
    font-size: 1.4rem;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const Info = ({ match, contacts, remove, history }) => {
  const id = match.params.id
  const { picture, name, last_name, phone, email, address } = contacts.find(
    contact => contact.id === id
  )
  return (
    <React.Fragment>
      <NavBar
        title={name}
        previous={history.goBack}
        actionLabel="Excluir"
        action={() => {
          history.push("/")
          remove(id)
        }}
      />
      <Wrapper>
        <Header background={picture}>
          <p>
            <span>{name}</span> <span>{last_name}</span>
          </p>
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
    </React.Fragment>
  )
}

export default Info
