import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {toast} from 'react-toastify'
import { addStudent } from '../api/fetchApi';
import {useNavigate} from 'react-router-dom'

function AddStudent() {

    const navigate=useNavigate()

    const [student,setStudent]=useState({
        name:"",place:"",email:"",phone:""
    })
    // console.log(student)
    const formSubmit=()=>{
        const {name,place,email,phone} = student 
        if (!name || !place || !email || !phone){
            toast("invalid credentioal")
        }else{
            addStudent(student).then((res)=>{
                console.log(res.data);
                toast("data added")
                navigate('/')
                
            })
        }

    }
    

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <FloatingLabel controlId="floatingName" label="Name" className='mt-2'>
                    <Form.Control type="text" placeholder="..." onChange={(e)=>{setStudent({...student,name:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPlace" label="Place" className='mt-2'>
                    <Form.Control type="text" placeholder="..." onChange={(e)=>{setStudent({...student,place:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className='mt-2'>
                    <Form.Control type="email" placeholder="..." onChange={(e)=>{setStudent({...student,email:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPhone" label="Phone" className='mt-2'>
                    <Form.Control type="text" placeholder="..." onChange={(e)=>{setStudent({...student,phone:e.target.value})}} />
                </FloatingLabel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning mt-2' onClick={()=>{formSubmit()}} >Add Student</button>
            </div>
            </div>
        </div>
    )
}

export default AddStudent