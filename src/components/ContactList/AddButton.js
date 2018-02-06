import { Link } from "react-router-dom"
import styled from "styled-components"
import plus from "../assets/add.svg"

export const AddButton = styled(Link)`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  background: #ea4c4c url(${plus}) no-repeat 50% 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 200ms ease;
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  }
`
