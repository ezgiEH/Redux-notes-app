import { Divider, Heading, Container, Center} from '@chakra-ui/react'
import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div>
      <Container maxW='md'>
        <Divider />
        <Center >
        <a href="https://www.linkedin.com/in/ezgihocaoglu/"><AiFillLinkedin /></a>
        <Heading size={'md'} p={8}>
        EZGİ HOCAOĞLU
        </Heading>
        <a href="https://github.com/ezgiEH"><AiFillGithub /></a>
        </Center> 
      </Container>
    </div>
  )
}

export default Footer