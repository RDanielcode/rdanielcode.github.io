import styled from 'styled-components'

export const Header = styled.header`
  margin: 0;
  height: 150px;
  width: 100%;
  background: linear-gradient(90deg, rgba(90,69,68,1) 9%, rgba(63,60,53,1) 100%, rgba(83,21,21,1) 100%);
  opacity: 1;
  &.inactive{
    opacity: 0.3;
  }
}
`
