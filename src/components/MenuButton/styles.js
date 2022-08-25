import styled from 'styled-components'

export const Anchor = styled.a`
display: none;
&.active{
    position: fixed;
    top: 5px;
    left: 5px;
    background: transparent;
    border: none;
    display: block;
  }
`
