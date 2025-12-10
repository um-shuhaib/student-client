import React from 'react'

function home() {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Shuhaib</td>
                        <td>Malappuram</td>
                        <td>kdash@lum.com</td>
                        <td>8562545859</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default home