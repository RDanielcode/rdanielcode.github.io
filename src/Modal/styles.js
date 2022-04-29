import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.7);
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
