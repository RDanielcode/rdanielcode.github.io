import styled from 'styled-components'

export const Container = styled.main`
  height: 500px;
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
  `

export const Image = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  @media (min-width: 600px){
    height: 245px;
  }
  `

export const ProjectContainer = styled.div`
  height: 500px;
  width: 100%;
  color: #b7b7b7;
  display: flex;
  background: #0c0e0f;
  flex-direction: column;
  align-items: center;
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
`
export const More = styled.h4`
  color: #b7b7b7;
`
