import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import add from "./assets/add.svg"
import edit from "./assets/edit.svg"
// import remove from "./assets/remove.svg"

const style = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 200ms ease;
  background: #ea4c4c url(${edit}) no-repeat 50% 50%;
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

// export const RemoveButton = styled.a`
//   ${style};
//   position: absolute;
//   top: 30px;
//   right: 30px;
//   background: #212121 url(${remove}) no-repeat 50% 50%;
// `
