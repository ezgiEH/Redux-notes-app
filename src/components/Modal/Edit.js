import { useState, useRef } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Badge,
    Textarea,
    ModalFooter,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { editNotes } from '../../redux/Notes/NoteSlice'
import { useDispatch } from 'react-redux'


function Edit(note) {
    const { onClose } = useDisclosure()
    const initialRef = useRef(null)

    const dispatch = useDispatch()
    const [value, setValue] = useState(note.note.color)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('red')
     

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editNotes({ id: note.note.id, title, content, color }))
        onClose()
    }

    return (
        <>
            <FormControl onSubmit={handleSubmit}>
                <FormLabel>Note Title</FormLabel>
                <Input ref={initialRef} placeholder={note.note.title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder={note.note.content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>

            <FormLabel mt={4} mb={4}>Color:
                <Badge ml='1' fontSize='0.8em' bg={value}>
                    {value.split(".", 1)}
                </Badge>
            </FormLabel>

            <RadioGroup onChange={setValue} value={value} size='lg' >
                <Stack spacing={5} direction='row' onChange={(e) => setColor(e.target.value)}>
                    <Radio bg={'pink.400'} colorScheme='pink' value='pink.400' />
                    <Radio bg={'red.400'} colorScheme='red' value='red.400' />
                    <Radio bg={'yellow.400'} colorScheme='yellow' value='yellow.400' />
                    <Radio bg={'blue.400'} colorScheme='blue' value='blue.400' />
                    <Radio bg={'green.400'} colorScheme='green' value='green.400' />
                </Stack>
            </RadioGroup>

            <ModalFooter>
                <Button bg='#497174' color="white" mr={3} onClick={handleSubmit} >
                    Save
                </Button>
            </ModalFooter>
        </>
    )
}

export default Edit