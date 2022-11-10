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
import Edit from './Edit'
import { EditIcon } from '@chakra-ui/icons'

function EditModal({note}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)


    return (
        <>
            <Button variant='ghost' onClick={onOpen}><EditIcon /></Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent m={8}>
                    <ModalHeader>Edit Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Edit note={note} />
                    </ModalBody>
                    <Button size='sm' bg="#D6E4E5" color="white" onClick={onClose}>
                    Back
                </Button>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditModal