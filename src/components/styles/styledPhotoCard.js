import styled from 'styled-components'
import { fadeIn } from './animations/animation'

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  `

const Article = styled.article`
  min-height: 200px
`

const Img = styled.img`
  ${fadeIn({ time: '2s' })};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Button = styled.button`
  display:flex;
  align-items:center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`

export { ImgWrapper, Img, Button, Article }
