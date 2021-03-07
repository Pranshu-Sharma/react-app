import React,{useState,useEffect, Fragment} from 'react'
import {Table} from 'react-bootstrap'

function Users(){

    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            // console.log(data)
            data.json().then(result=>{
                console.log(result)
                setUser(result.data)
            })
        })
    },[])

    return(
        <Fragment>
            <h1>User listing is here</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    </tr>
                    {
                        user.map((item,index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        )
                    }
                </thead>
            </Table>
        </Fragment>
    )
}

export default Users