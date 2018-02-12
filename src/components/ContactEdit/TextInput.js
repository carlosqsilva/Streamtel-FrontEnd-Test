import React from "react"
import styled, { css } from "styled-components"
import InputMask from "react-input-mask"

const Container = styled.div`
  position: relative;
  margin-top: 30px;
`

const labelUp = css`
  top: -20px;
  font-size: 0.7rem;
  color: #424242;
`

const Input = styled.input`
  padding: 10px 10px 10px 5px;
  font-size: 1.2rem;
  display: block;
  outline: none;
  border: none;
  border-bottom: 1px solid #444;
  min-width: 280px;
  &:invalid {
    border-bottom: 1px solid red;
  }
  &:focus ~ label {
    ${labelUp};
  }
  @media (min-width: 550px) {
    width: 500px;
  }
`

const Label = styled.label`
  color: #999;
  font-size: 1.1rem;
  pointer-events: none;
  font-weight: normal;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: all 200ms ease;
  ${props => !props.empty && labelUp};
`

export const TextInput = ({ value, onChange, name, label, ...props }) => (
  <Container>
    <Input
      value={value}
      onChange={onChange}
      name={name}
      {...props}
      autoComplete="off"
    />
    <Label empty={value.length === 0}>{label}</Label>
  </Container>
)

const Mask = Input.withComponent(InputMask)

export const MaskInput = ({ value, onChange, name, label, ...props }) => (
  <Container>
    <Mask
      value={value}
      onChange={onChange}
      name={name}
      {...props}
      autoComplete="off"
    />
    <Label empty={value.length === 0}>{label}</Label>
  </Container>
)
