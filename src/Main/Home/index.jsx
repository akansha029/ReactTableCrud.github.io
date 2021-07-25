import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [employees, setEmployee] = useState([]);
    useEffect(() => {
        loadEmployes();
        // console.log("hello");
    },[]);
    const loadEmployes = async () => {
        //get the data from json
        const result = await axios.get("http://localhost:3001/data");
        // console.log(result);
        // For adding new data in top use reverse
        setEmployee(result.data.reverse());
    };
// for delete the use 
const deleteUser = async id => {
    let surity = window.confirm("Are you sure, you want to Delete this Employee?")
    if(surity){
        await axios.delete(`http://localhost:3001/data/${id}`);
        //  after delete the data show remaining data of table.
        loadEmployes();
    }
    else{
        console.log("cancelled.")
    }
 
}

    return (
        <div className="container">
            <div className=""> {console.log(employees)}
                <h1 className="TextCenter">Employee Data</h1>
                <ReactBootstrap.Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        employees.map((employee , index) =>(
                            <tr>
                            <th>{index +1}</th>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.salary}</td>
                            <td>
                            {/* Dynamic Routing */}
                               <NavLink  to={`/edituser/${employee.id}`}>
                               <ReactBootstrap.Button variant="outline-info" className="EditBtnMargin">Edit</ReactBootstrap.Button>
                               </NavLink>
                               <NavLink  to="/">
                               <ReactBootstrap.Button variant="outline-danger" onClick= {() => deleteUser(employee.id) }>Delete</ReactBootstrap.Button>
                               </NavLink>
                            </td>
                            </tr>
                        ))
                     }
                    </tbody>
                </ReactBootstrap.Table>
            </div>
        </div>
    );
};

export default Home;