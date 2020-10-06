import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

const Search = () => {
    return (
        <Form inline>
            <FormControl type='text' placeholder='Search for champions' className='mr-sm-2' />
        </Form>
    )
}

export default Search