import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import add from "../Assets/add.svg"
import edit from "../Assets/edit.svg"

const style = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 200ms ease;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  }
`

export const EditButton = styled(Link)`
  ${style};
  position: absolute;
  right: 30px;
  bottom: -25px;
  background: #ea4c4c url(${edit}) no-repeat 50% 50%;
`

export const AddButton = styled(Link)`
  ${style};
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #ea4c4c url(${add}) no-repeat 50% 50%;
`
