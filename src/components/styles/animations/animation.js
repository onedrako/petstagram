import { css, keyframes } from 'styled-components'

const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation : ${time} ${fadeInKeyFrames} ${type};`

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0px);
    opacity: 1;
  }
`
export { fadeIn }
