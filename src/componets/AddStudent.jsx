import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddStudent() {

    const [student,setStudent]=useState({
        name:"",place:"",email:"",phone:""
    })

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <FloatingLabel controlId="floatingPassword" label="Name" className='mt-2'>
                    <Form.Control type="text" placeholder="..." onChange={(e)=>{setStudent({...student,name:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Place" className='mt-2'>
                    <Form.Control type="text" placeholder="..." onChange={(e)=>{setStudent({...student,place:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Email" className='mt-2'>
                    <Form.Control type="email" placeholder="..." onChange={(e)=>{setStudent({...student,email:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Phone" className='mt-2'>
                    <Form.Control type="text" placeholder="..." onChange={(e)=>{setStudent({...student,phone:e.target.value})}} />
                </FloatingLabel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning mt-2'>Add Student</button>
            </div>
            </div>
        </div>
    )
}

export default AddStudent