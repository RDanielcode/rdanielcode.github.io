import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1e1e1e;
  height: 95vh;
`

export const CapitalLetter = styled.span`
  font-size: 50px;
  top: -5px;
  right: 90%;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
  @media (min-width: 500px){
    font-size: 100px;
  }
`
export const SecondTitle = styled.h4`
  color: #b7b7b7;
  @media (min-width: 500px){
    font-size: 50px;
  }
`
export const Container = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
