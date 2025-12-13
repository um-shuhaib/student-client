import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddStudent() {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <FloatingLabel controlId="floatingPassword" label="Name" className='mt-2'>
                    <Form.Control type="text" placeholder="..." />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Place" className='mt-2'>
                    <Form.Control type="text" placeholder="..." />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Email" className='mt-2'>
                    <Form.Control type="email" placeholder="..." />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Phone" className='mt-2'>
                    <Form.Control type="text" placeholder="..." />
                </FloatingLabel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning mt-2'>Add Student</button>
            </div>
            </div>
        </div>
    )
}

export default AddStudent