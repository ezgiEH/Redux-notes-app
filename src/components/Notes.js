import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import {SimpleGrid} from '@chakra-ui/react'

function Notes() {
    const notes = useSelector(state => state.notes.items)
  
    return (
    <div>
        <SimpleGrid minChildWidth={160} spacing={8} p={8}>
            {notes.map(note => (
                <Note note={note} key={note.id}/>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default Notes