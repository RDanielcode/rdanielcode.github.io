import styled from 'styled-components'
import { Link as LinkStyle } from 'react-router-dom'

export const FooterDiv = styled.footer`
  display:flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  height: 36px;
  border-top: 1px solid;
  width: 100%;
  background-color: #0c0e0f;
  border-top: 1px solid #a1a110;
  right: 0;
  left: 0;
  z-index: 10;
`

export const Link = styled(LinkStyle)`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`
