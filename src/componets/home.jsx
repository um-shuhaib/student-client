import React from 'react'
import { Link } from 'react-router-dom'
import {listStudents} from '../api/fetchApi'
import { useEffect } from 'react'


function home() {

useEffect(()=>{
    listStudents().then((res)=>{
        console.log(res.data);
        console.log(res.status);
        
    })
},[])




  return (
    <div className='p-5 mt-5'>
        <div className='container d-flex flex-column justify-content-center align-items-center p-5 shadow' style={{minHeight:"500px"}}>
            <h1 className='text-center'>Table</h1>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PLACE</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Shuhaib</td>
                        <td>Malappuram</td>
                        <td>kdash@lum.com</td>
                        <td>8562545859</td>
                        <td>
                            <Link to={'edit'} className='m-2 btn'><i className="fa-solid fa-pen-to-square fa-xl" style={{color:' #74C0FC'}}></i></Link>
                            <Link to={'edit'} className='m-2 btn'><i className="fa-solid fa-delete-left fa-xl" style={{color:' red'}}></i></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default home