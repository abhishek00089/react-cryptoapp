import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = ({ message }) => {
    return (
        <Alert
            status="error"
            position={'fixed'}
            bottom={'4'}
            transform={'translateX(-50%'}
            w={'full'}
        >
            <AlertIcon />
            {message}
        </Alert>
    )
}

export default Error
