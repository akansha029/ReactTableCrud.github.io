import React, { useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [ empUser , setEmpUser] = useState({
        name : "",
        designation : "",
        salary : ""
    });
    //object destruction (as a local variable)
    const {name , designation , salary } = empUser;

    // for update and store the values.
    const onInputChange = e => {
        //  console.log(e.target.value);
        // for name and value 
        setEmpUser({...empUser,[e.target.name] : e.target.value , id : Math.floor(Math.random() * 6)+100})
    };
    // e.preventDefault for stop the default behaviour  event (Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.)
    const onSubmit = async e => {
        e.preventDefault();
        // for sending/adding the data
        await axios.post("http://localhost:3001/data" , empUser);
        // await is use for compete the post method always use with asyan 
       // redirect to home page 
        history.push("/");
       
    }
    return (
        <>
            <ReactBootstrap.Container>
                <ReactBootstrap.Row className="justify-content-md-center">
                    <ReactBootstrap.Col sm={8}>
                    <h2 className="TextCenter">Add New Employee</h2>
                    {/* for submit the data create a onSubmit Fuction */}
                        <ReactBootstrap.Form onSubmit={ e => onSubmit(e)}>
                            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicName">
                                <ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control 
                                type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name} 
                                //fuction into fuction
                                onChange = {e => onInputChange (e)}
                                required
                                />
                            </ReactBootstrap.Form.Group>

                            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicDesignation">
                                <ReactBootstrap.Form.Label>Designation</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control 
                                type="text" 
                                placeholder="Enter Your Designation" 
                                name="designation"
                                value={designation} 
                                onChange = {e => onInputChange (e)}  
                                required
                                />
                            </ReactBootstrap.Form.Group>
                            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicSalary">
                                <ReactBootstrap.Form.Label>Salary</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control 
                                type="number" 
                                placeholder="Enter Your Salary" 
                                name="salary"
                                value ={salary} 
                                onChange = {e => onInputChange (e)} 
                                required
                                />
                            </ReactBootstrap.Form.Group>
                            <ReactBootstrap.Button variant="primary" type="submit" className="EditBtnMargin">
                                Added
                            </ReactBootstrap.Button>
                            <ReactBootstrap.Button variant="primary" type="button" onClick ={()=>history.push('/')}>
                                Cancel 
                            </ReactBootstrap.Button>
                        </ReactBootstrap.Form>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default AddUser;
