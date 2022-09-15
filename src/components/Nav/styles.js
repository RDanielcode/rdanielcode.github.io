import styled from 'styled-components'

export const Nav = styled.nav`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
`
export const List = styled.ul`
  display: flex;
  list-style: none;
  color: #b7b7b7;
`
export const ItemList = styled.li`
  margin: 10px;
  text-decoration: none;
  font-size: 14px;
  &:hover{
    border-bottom: 1px solid #a1a110
  }
  &.mark{
    border-bottom: 1px solid #a1a110
  }

  @media (min-width: 500px){
    font-size: 16px;
  }
`
export const Anchor = styled.a`
  text-decoration: none;
  color: #b7b7b7;
`
