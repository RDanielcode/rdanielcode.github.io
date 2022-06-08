import styled from 'styled-components'

export const Container = styled.main`
  height: 400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  `

export const Card = styled.div`
  height: 200px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export const Image = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
  `

export const ProjectContainer = styled.div`
  height: 500px;
  width: 100%;
  color: #b7b7b7;
  display: flex;
  background: #1e1e1e;
  flex-direction: column;
  align-items: center;
  &.inactive{
    opacity: 0.3;
  }
`
export const Title = styled.h4`
  position: relative;
`
export const CapitalLetter = styled.span`
  position: absolute;
  font-size: 50px;
  top: -32px;
  right: 60%;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
`
