import styled from 'styled-components'

export const Form = styled.form`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.inactive{
    opacity: 0.3;
  }
`

export const InputTitle = styled.input`
  width: 330px;
  max-width: 500px;
  height: 30px;
  margin: 10px;
`

export const InputContent = styled.input`
  width: 330px;
  max-width: 500px;
  height: 330px;
  margin: 10px;
`
