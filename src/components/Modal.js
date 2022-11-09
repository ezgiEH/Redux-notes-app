import { useState, useRef } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Badge,
    Textarea
} from '@chakra-ui/react'

import { addNotesAsync } from '../redux/NoteSlice'
import { useDispatch } from 'react-redux'

function AddModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const dispatch = useDispatch()
    const [value, setValue] = useState('red')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('red')


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNotesAsync({
            title: title,
            content: content,
            color: color
        }))
        onClose()
    }

    return (
        <>
            <Button colorScheme='gray' size='sm' onClick={onOpen}>Add Note</Button>
            <Modal 
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent m={8}>
                    <ModalHeader>Add Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Note Title</FormLabel>
                            <Input ref={initialRef} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea placeholder='Description' onChange={(e) => setContent(e.target.value)} />
                        </FormControl>

                        <FormLabel mt={4} mb={4}>Color:
                            <Badge ml='1' fontSize='0.8em' colorScheme={value}>
                                { value }
                            </Badge>
                        </FormLabel>
                        <RadioGroup onChange={setValue} value={value} size='lg' >
                            <Stack spacing={5} direction='row' onChange={(e) => setColor(e.target.value)}>
                                <Radio bg={'pink'} colorScheme='pink' value='pink' />
                                <Radio bg={'red'} colorScheme='red' value='red' />
                                <Radio bg={'yellow'} colorScheme='yellow' value='yellow' />
                                <Radio bg={'blue'} colorScheme='blue' value='blue' />
                                <Radio bg={'green'} colorScheme='green' value='green' />
                            </Stack>
                        </RadioGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button bg='#497174' color="white" mr={3} onClick={handleSubmit}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddModal