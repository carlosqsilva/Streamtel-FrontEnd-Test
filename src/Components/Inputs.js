import React from "react"
import styled, { css } from "styled-components"
import InputMask from "react-input-mask"
import photo from "../Assets/photo.svg"

const TextContainer = styled.div`
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

const Mask = Input.withComponent(InputMask)

export const InputText = ({ label, ...props }) => (
  <TextContainer>
    {props.mask ? (
      <Mask {...props} autoComplete="off" />
    ) : (
      <Input {...props} autoComplete="off" />
    )}
    <Label empty={props.value.length === 0}>{label}</Label>
  </TextContainer>
)

const ImageContainer = styled.label`
  background-image: url(${props => props.picture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 45vh;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  > input {
    outline: none;
    width: 0.1rem;
    height: 0.1rem;
    opacity: 0;
  }
`

export const InputImage = ({ image, onChange }) => {
  const picture = image ? image : photo
  return (
    <ImageContainer picture={picture}>
      <input type="file" accept=".jpeg,.jpg" onChange={onChange} />
    </ImageContainer>
  )
}
