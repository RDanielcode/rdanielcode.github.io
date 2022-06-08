import styled from 'styled-components'

export const Header = styled.header`
  margin: 0px;
  height: 200px;
  width: 100%;
  background-color: #0c0e0f;
  &.inactive{
    opacity: 0.3;
  }
}
`
export const Photo = styled.img`
  width: 150px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 15px;
`

export const Title = styled.h2`
  margin: 0px;
  text-align: center;
  color: #b7b7b7;
  background-color: #a1a110;
`
export const Text = styled.p`
  font-size: 8px;
  color: #b7b7b7;
  margin-top: 2px;
  text-align: justify;
  margin-right: 36px;
  z-index: 2;
`
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Info = styled.div`
  width: 250px;
  position: relative
`
export const CapitalLetter = styled.span`
  position: absolute;
  font-size: 50px;
  top: -5px;
  right: 90%;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
`
export const SecondTitle = styled.h4`
  margin: 25px 0 0 10px;
  color: #b7b7b7;
`
