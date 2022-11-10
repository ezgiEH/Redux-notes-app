import { useDispatch } from 'react-redux'
import { Input} from '@chakra-ui/react'
import { setSearch } from '../redux/Notes/NoteSlice'


function Search() {
    const dispatch = useDispatch()

  return (
    <div>
        <Input htmlSize={8} variant='filled' placeholder='Search' onChange={(e) => dispatch(setSearch(e.target.value))}/>
    </div>
  )
}

export default Search