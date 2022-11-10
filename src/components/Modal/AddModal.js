import { useRef } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import Form from './Form'


function AddModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)


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
                        <Form />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddModal