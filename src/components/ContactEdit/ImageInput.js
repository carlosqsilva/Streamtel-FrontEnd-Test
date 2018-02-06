import React from "react"
import styled from "styled-components"
import photo from "../assets/photo.svg"

const Container = styled.label`
  position: relative;
  background-image: url(${props => props.picture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 45vh;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  > input {
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 0.1rem;
    height: 0.1rem;
    opacity: 0;
  }
`

export const Photo = ({ image, onChange }) => {
  const picture = image ? image : photo
  return (
    <Container picture={picture}>
      <input type="file" accept=".jpeg,.jpg" onChange={onChange} />
    </Container>
  )
}
