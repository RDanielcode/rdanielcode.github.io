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
  display: flex;
  flex-direction: column;
  align-items: center;
  &.inactive{
    opacity: 0.3;
  }
`
