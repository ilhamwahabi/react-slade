import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button';
import Slade from '../../lib/Slade'

const Basic = ({ items, open, index, openSlade, closeSlade, nextSlade, previousSlade }) => (
  <Container>
    <Button onClick={openSlade}>Show Dragon Slade</Button>
    <Slade 
      items={items} 
      open={open} 
      index={index} 
      closeSlade={closeSlade}
      nextSlade={nextSlade}
      previousSlade={previousSlade}
    />
  </Container>
)

export default Basic