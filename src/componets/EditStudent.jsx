import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { getStudent } from '../api/fetchApi';
import { useEffect } from 'react';

function EditStudent() {

    const {id}=useParams()

    useEffect(()=>{
        getStudent(id).then((res)=>{
            console.log(res.data);
            
            

            
        })
    },[])


  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <FloatingLabel controlId="floatingName" label="Name" className='mt-2'>
                    <Form.Control type="text" placeholder="..." />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPlace" label="Place" className='mt-2'>
                    <Form.Control type="text" placeholder="..." />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className='mt-2'>
                    <Form.Control type="email" placeholder="..." />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPhone" label="Phone" className='mt-2'>
                    <Form.Control type="text" placeholder="..." />
                </FloatingLabel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning mt-2'>Add Student</button>
            </div>
            </div>
        </div>
  )
}

export default EditStudent