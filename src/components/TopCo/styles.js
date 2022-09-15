import styled from 'styled-components'

export const Article = styled.article`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  background: #0c0e0f;
  overflow: hidden;
`
export const Photo = styled.img`
  width: 60%;
  object-fit: cover;
  overflow: hidden;
  @media (min-width: 700px){
    width: 500px;
  }
`

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 100%;
`
export const InfoNames = styled.div`
  width: 40%;
  margin: 80px 0 0 40px;
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 10%;
`
export const Name = styled.h1`
  color: #a1a110;
  font-size: 32px;
  margin: 0;
  @media (min-width: 500px){
    font-size: 50px;
  }
  @media (min-width: 800px){
    font-size: 80px;
  }
`

export const Tech = styled.p`
  color: #b7b7b7;
  font-size: 16px
`
export const Button = styled.button`
  background: #a1a110;
  color: #0c0e0f;
  border: none;
  border-radius: 10px;
`
