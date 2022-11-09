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


function AddModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [value, setValue] = useState('1')

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
                            <Input ref={initialRef} placeholder='Title' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea placeholder='Description' />
                        </FormControl>

                        <FormLabel mt={4} mb={4}>Color:
                            <Badge ml='1' fontSize='0.8em' colorScheme={value}>
                                { value }
                            </Badge>
                        </FormLabel>
                        <RadioGroup onChange={setValue} value={value} size='lg'>
                            <Stack spacing={5} direction='row'>
                                <Radio bg={'pink'} colorScheme='pink' value='pink' />
                                <Radio bg={'red'} colorScheme='red' value='red' />
                                <Radio bg={'yellow'} colorScheme='yellow' value='yellow' />
                                <Radio bg={'blue'} colorScheme='blue' value='blue' />
                                <Radio bg={'green'} colorScheme='green' value='green' />
                            </Stack>
                        </RadioGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button bg='#497174' color="white" mr={3}>
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