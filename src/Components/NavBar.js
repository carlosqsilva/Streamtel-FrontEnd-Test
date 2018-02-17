import React from "react"
import styled from "styled-components"
import back from "../Assets/back.svg"

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 960px) 1fr;
  height: 55px;
  background: #f9f9f9;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 1;
`

const Container = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`

const Title = styled.h3`
  margin: 0;
  margin-left: -3px;
  letter-spacing: 3px;
  color: #424242;
`

const NavButton = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  color: #007aff;
  cursor: pointer;
`

export const NavBar = ({ title, previous, action, actionLabel, ...props }) => (
  <Wrapper>
    <Container>
      <NavButton onClick={previous}>
        <img src={back} width={16} height={16} alt="" />
        Voltar
      </NavButton>
      <Title>{title}</Title>
      <NavButton onClick={action}>{actionLabel}</NavButton>
    </Container>
  </Wrapper>
)
