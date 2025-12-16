import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { getStudent } from '../api/fetchApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { updateStudent } from '../api/fetchApi';
import { useNavigate } from 'react-router-dom';

function EditStudent() {

    const [student,setStudent]=useState({
        name:"",place:"",email:"",phone:""
    })
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        getStudent(id).then((res)=>{
            console.log(res.data);
            setStudent(res.data)
            
        })
    },[])

    const formSubmit=()=>{
        updateStudent(id,student).then((res)=>{
            console.log(res.data);
            
            toast("data updated")
            navigate('/')
            
            })

        
    }


  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <FloatingLabel controlId="floatingName" label="Name" className='mt-2'>
                    <Form.Control type="text" placeholder="..." value={student.name} onChange={(e)=>{setStudent({...student,name:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPlace" label="Place" className='mt-2'>
                    <Form.Control type="text" placeholder="..." value={student.place} onChange={(e)=>{setStudent({...student,place:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className='mt-2'>
                    <Form.Control type="email" placeholder="..." value={student.email} onChange={(e)=>{setStudent({...student,email:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPhone" label="Phone" className='mt-2'>
                    <Form.Control type="text" placeholder="..." value={student.phone} onChange={(e)=>{setStudent({...student,phone:e.target.value})}} />
                </FloatingLabel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning mt-2' onClick={formSubmit} >Update Student</button>
            </div>
            </div>
        </div>
  )
}

export default EditStudent