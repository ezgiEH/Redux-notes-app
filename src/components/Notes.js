import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import {SimpleGrid} from '@chakra-ui/react'


function Notes() {
    const notes = useSelector(state => state.notes.items)
    const search = useSelector(state => state.notes.searchTerm)
    const [ filteredNotes, setFilteredNotes ] = useState(notes)

    useEffect(() => {
       if (search) {
              setFilteredNotes(
                notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()) 
                || note.content.toLowerCase().includes(search.toLowerCase())))
        } else {
                setFilteredNotes(notes)
            }
    }, [search, notes])

    return (
    <div>
        <SimpleGrid minChildWidth={240} spacing={8} p={8}>
            {filteredNotes.map(note => (
                <Note note={note} key={note.id}/>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default Notes