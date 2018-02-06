import styled from "styled-components"
import image from "../assets/photo.svg"

export const Header = styled.div`
  background: #29b6f6 url(${props => (props.background ? props.background : image)}) no-repeat;
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
