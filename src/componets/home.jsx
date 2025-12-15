import React from 'react'
import { Link } from 'react-router-dom'
import { listStudents,deleteStudent } from '../api/fetchApi'
import { useEffect } from 'react'
import { useState } from 'react'


function home() {

    const [students, setStudent] = useState([])

    useEffect(() => {
        listStudents().then((res) => {
            console.log(res.data);
            setStudent(res.data)

        })
    }, [])

    const deleteData=(id)=>{
        deleteStudent(id).then((res)=>{
            alert("item deleted")
        })

    }




    return (
        <div className='p-5 mt-5'>
                <h1 className='text-center'>Students</h1>
            <div className='container d-flex flex-column justify-content-center align-items-center p-5 shadow' style={{ minHeight: "500px" }}>
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
                        {
                            students.length > 0 ?

                                students.map((stud) => (
                                    <tr>
                                        <td>{stud.id}</td>
                                        <td>{stud.name}</td>
                                        <td>{stud.place}</td>
                                        <td>{stud.email}</td>
                                        <td>{stud.email}</td>
                                        <td>
                                            <Link to={'edit'} className='m-2 btn'><i className="fa-solid fa-pen-to-square fa-xl" style={{ color: ' #74C0FC' }}></i></Link>
                                            <Link onClick={()=>{deleteData(stud.id)}} className='m-2 btn'><i className="fa-solid fa-delete-left fa-xl" style={{ color: ' red' }}></i></Link>
                                        </td>
                                    </tr>
                                ))

                                : <h3>no data</h3>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default home