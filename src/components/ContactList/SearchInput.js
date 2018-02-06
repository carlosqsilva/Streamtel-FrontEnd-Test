import React from "react"
import styled from "styled-components"
import lupa from "../assets/search.svg"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 0 0.5rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  min-width: 290px;
  @media (min-width: 550px) {
    width: 500px;
  }
`

const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem;
  border: none;
  outline: none;
`

const Icon = styled.img`
  position: absolute:
  align-self: center;
  margin-left: 5px;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #03a9f4;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

export const SearchInput = ({ onChange, ...props }) => (
  <Header>
    <Wrapper>
      <Icon src={lupa} alt="" />
      <Input onChange={onChange} />
    </Wrapper>
  </Header>
)
