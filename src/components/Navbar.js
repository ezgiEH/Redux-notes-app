import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/react'
import AddModal from './Modal'

function Navbar() {
    return (
        <Box bg="#D6E4E5" w="100%" p={4} color="#497174">
            <Flex>
                <Box>
                    <Text>NOTES-APP</Text>
                </Box>
                    <Spacer />
                <Box>
                    <AddModal />
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar