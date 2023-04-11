import React from 'react'
import Head form 'next/Head'
import {
    Box,
    Flex,
    Text,
    Stack,
    Button
} from '@chakra-ui/react'

export const layout = ({children }) => {
  return (
    <div><head><title>E-commerce APP</title></head>
    <Box>
        <Flex>
            <Flex><Text>logo</Text><Stack><Button>Sign in</Button><Button>Sign out</Button></Stack></Flex>
        </Flex>
    </Box>
    {children}
    </div>
  )
}

export default layout