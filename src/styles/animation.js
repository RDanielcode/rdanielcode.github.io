import { css, keyframes } from 'styled-components'

const leftToRight = keyframes`
  from{
    left: -1300px;
  }
  to{
    left: 0px
  }
`
const rightToLeft = keyframes`
  from{
    left: 0px;
  }
  to{
    left: -1300px;
  }
`
export const moveLeft = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${leftToRight} ${type};`

export const moveRight = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${rightToLeft} ${type};`
