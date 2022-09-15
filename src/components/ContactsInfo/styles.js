import styled from 'styled-components'

export const Form = styled.form`
  width: 70%;
  height: 70%;
  max-width: 400px;
  color: #b7b7b7;
  background: #0c0e0f;
  display: flex;
  flex-direction: column;
  margin: 0px auto 20px auto;
  @media (min-width: 500px){
    margin: 60px 10px 30px 30px;
  }
`

export const InputTitle = styled.input`
  width: 100%;
  height: 30px;
  margin: 5px auto;
  background: #c9c9c9;
  outline: none;
  border: none;
`

export const InputContent = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 5px auto;
  background: #c9c9c9;
`

export const Label = styled.label`
  font-size: 14px;
`

export const Contact = styled.a`
  margin: 8px;
  display: flex;
  align-items: center;
`

export const Social = styled.div`
  color: #b7b7b7;
  text-decoration: none;
  display: flex;
  margin: 20px;
  justify-content: center;
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
export const Title = styled.h4`
  margin-left: 20px;
  margin-top: 60px;
  color: #b7b7b7;
  @media (min-width: 500px){
    font-size: 50px;
  }
`
export const Button = styled.button`
  background: #a1a110;
  border: none;
  color: #b7b7b7;
  width: 100%;
  margin-top: 10px;
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media (min-width: 500px){
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`
