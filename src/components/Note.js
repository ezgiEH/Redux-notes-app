import React from 'react'
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import { CheckIcon, EditIcon } from '@chakra-ui/icons'

function Note({ note }) {
    
    return (
        <Box >
            <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'}
                bg={note.color}
                height='240px'
                boxShadow={'2xl'}
                p={2}
                rounded={'md'}>
                <Box>
                <Heading 
                    noOfLines={1}
                    fontSize={'2xl'}
                    fontWeight={500}
                    fontFamily={'body'}>{note.title}
                </Heading>
                <Divider />
                </Box>     
                <Box>
                <Text noOfLines={4} pt={4}
                    fontSize='md'>{note.content}
                </Text>
                </Box>
                <Box pt={4} display={'flex'} justifyContent={'space-around'}>
                    <Button colorScheme='whiteAlpha' variant='ghost'><CheckIcon /></Button>
                    <Button colorScheme='blackAlpha' variant='ghost'><EditIcon /></Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Note