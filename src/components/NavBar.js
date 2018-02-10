import React from "react"
import styled from "styled-components"
import back from "./assets/back.svg"

const Wrapper = styled.nav`
  background: #f9f9f9;
  padding: 20px 5px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  @media (min-width: 550px) {
    font-size: 1.1rem;
  }
`

const Title = styled.h3`
  margin: 0;
  margin-left: -3px;
  letter-spacing: 3px;
  color: #424242;
`

const NavButton = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  font-size: 1em;
  color: #007aff;
  cursor: pointer;
`

export const NavBar = ({ title, previous, action, actionLabel, ...props }) => (
  <Wrapper>
    <NavButton onClick={previous}>
      <img src={back} width={16} height={16} alt="" />
      Voltar
    </NavButton>
    <Title>{title}</Title>
    <NavButton onClick={action}>{actionLabel}</NavButton>
  </Wrapper>
)
