import styled from 'styled-components'

export const Form = styled.form`
  height: 400px;
  width: 70%;
  max-width: 600px;
  color: #b7b7b7;
  background: #0c0e0f;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 40px;
  &.inactive{
    opacity: 0.3;
  }
`

export const InputTitle = styled.input`
  width: 100%;
  height: 30px;
  margin: 5px auto;
  background: #c9c9c9;
`

export const InputContent = styled.textarea`
  width: 100%;
  height: 330px;
  margin: 5px auto;
  background: #c9c9c9;
`

export const Label = styled.label`
  font-size: 14px;
`

export const Contact = styled.a`
  margin: 3px;
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
  position: absolute;
  font-size: 50px;
  top: -32px;
  left: -4%;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
`
export const Title = styled.h4`
  position: relative;
  margin-left: 20px;
`
export const Button = styled.button`
  background: #a1a110;
  border: none;
  color: #b7b7b7;
  width: 100%;
`
