import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 600px){
    flex-wrap: nowrap;
  }
  `

export const Card = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items:center;
  cursor: pointer;
  `

export const Image = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  &:hover{
    opacity: 0.4;
  }
  @media (min-width: 600px){
    height: 245px;
  }
  `

export const ProjectContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: #b7b7b7;
  display: flex;
  background: #0c0e0f;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  &.inactive{
    opacity: 0.3;
  }
`
export const CapitalLetter = styled.span`
  font-size: 50px;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
  @media (min-width: 500px){
    font-size: 100px;
  }
`
export const SecondTitle = styled.h4`
  margin: 60px 0 0 10px;
  color: #b7b7b7;
  margin-bottom: 10px;
  @media (min-width: 500px){
    font-size: 50px;
  }
`

export const More = styled.h4`
  color: #b7b7b7;
  @media (min-width: 500px){
    font-size: 20px;
  }
`
