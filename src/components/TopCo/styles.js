import styled from 'styled-components'

export const Article = styled.article`
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  background: #0c0e0f;
`
export const Photo = styled.img`
  width: 200px;
`
export const Nav = styled.nav`
  height: 30px;
  display: flex;
  justify-content: flex-end;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  color: #b7b7b7;
`
export const ItemList = styled.li`
  margin: 10px;
  text-decoration: none;
  font-size: 10px;
  &:hover{
    border-bottom: 1px solid #a1a110
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`
export const InfoNames = styled.div`
  position: absolute;
  left: 5%;
  top: 25%;
`
export const Name = styled.h1`
  color: #a1a110;
  font-size: 32px;
  margin: 0;
`
export const Anchor = styled.a`
  text-decoration: none;
  color: #b7b7b7;
`
export const Tech = styled.p`
  color: #b7b7b7;
`
export const Button = styled.button`
  background: #a1a110;
  color: #0c0e0f;
  border: none;
  border-radius: 10px;
`
