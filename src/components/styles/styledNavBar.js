import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from './animations/animation'

const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

const Link = styled(LinkRouter)`
align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '•';
      display: inline-block;
      height: 100%;
      width: 0;
    }
  }
`
export { Nav, Link }
