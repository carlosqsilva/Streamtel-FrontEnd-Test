import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import image from "../assets/photo.svg"

const Container = styled(Link)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  margin-bottom: 15px;
  border-radius: 2px;
  background: #fff;
  padding: 5px;
  width: 100%;
  @media (min-width: 550px) {
    width: 450px;
  }
`

const Image = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 55px;
  height: 55px;
`

const Info = styled.div`
  flex: 1;
  text-align: left;
  font-size: 0.8rem;
  align-self: flex-start;
  > p {
    margin: 0;
    color: #424242;
    &:first-child {
      color: #212121;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`

export const Contact = ({ id, picture, name, last_name, email, phone }) => {
  const photo = picture ? picture : image
  return (
    <Container to={`/contact/${id}`}>
      <Image src={photo} alt="contact picture" />
      <Info>
        <p>
          <span>{name}</span> <span>{last_name}</span>
        </p>
        {email && <p>{email}</p>}
        {phone && <p>{phone}</p>}
      </Info>
    </Container>
  )
}
