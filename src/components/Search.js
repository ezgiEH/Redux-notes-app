import { useSelector, useDispatch } from 'react-redux'
import { Input, SimpleGrid } from '@chakra-ui/react'
import Note from './Note' 
import { setSearch } from '../redux/Notes/NoteSlice'
import { selectSearch } from '../redux/Notes/NoteSlice'


function Search() {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    // const notes = useSelector(state => state.notes)
    // const [searchTerm, setSearchTerm] = useState('')

    // const results = notes.items.filter(
    //         note => note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         note.content.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
        <Input variant='filled' placeholder='Search' onChange={(e) => dispatch(setSearch(e.target.value))}/>
        {search && (
        <SimpleGrid minChildWidth={240} spacing={8} p={8}>
            {search.map(note => (
                <Note note={note} key={note.id} />
            ))}
        </SimpleGrid>
        )}
    </div>
  )
}

export default Search