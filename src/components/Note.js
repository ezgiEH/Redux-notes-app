import React from 'react'
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { deleteNotes } from '../redux/Notes/NoteSlice'
import EditModal from './Modal/EditModal'

function Note({ note }) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteNotes(note.id))
    }

    return (
        <Box >
            <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'}
                bg={note.color}
                height='240px'
                boxShadow={'2xl'}
                p={2}
                rounded={'md'}
                maxWidth={'sm'}
                >
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
                    <EditModal note={note} />
                    <Button variant='ghost' onClick={handleDelete}><CloseIcon /></Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Note