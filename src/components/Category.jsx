import React from 'react'
import { Anchor, Image } from './styles/stylesCategory'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg'

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='' />
    {emoji}
  </Anchor>
)

export { Category }
