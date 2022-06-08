import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.95);
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:3;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
`
export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`
export const Title = styled.h3`
  color: #ada5a5;
  margin: 10px;
  font-family: sans-serif;
`

export const Description = styled.p`
  color: #ada5a5;
  text-align: justify;
  font-family: sans-serif;
  margin: 0 20px;
`

export const ProjectButton = styled.button`
  margin: 10px;
`
