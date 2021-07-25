import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
//useParams - Use it to access match.params of the current <Route>
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    // alert(id);
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
        setEmpUser({...empUser,[e.target.name] : e.target.value})
    };

    useEffect(() => {
        loadUser();
    },[]);


    // e.preventDefault for stop the default behaviour  event (Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.)
    const onSubmit = async e => {
        e.preventDefault();
        // put is use to update the new data.
        await axios.put(`http://localhost:3001/data/${id}` , empUser);
        history.push("/");
    }

    //  for Load the current data, get method is use.
   const loadUser = async () => {
    //useParams returns an object of key/value pairs of URL parameters 
    //for showing the variable value ${id}
       const result = await axios.get(`http://localhost:3001/data/${id}`);
    //    console.log(result);
    setEmpUser(result.data);
   }
    return (
        <>
            <ReactBootstrap.Container>
                <ReactBootstrap.Row className="justify-content-md-center">
                    <ReactBootstrap.Col sm={8}>
                    <h2 className="TextCenter">Edit Employee Details</h2>
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
                                />
                            </ReactBootstrap.Form.Group>
                            <ReactBootstrap.Form.Group className="mb-3" controlId="formBasicSalary">
                                <ReactBootstrap.Form.Label>Salary</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control 
                                type="number" 
                                placeholder="Enter Your Designation" 
                                name="salary"
                                value ={salary} 
                                onChange = {e => onInputChange (e)} 
                                />
                            </ReactBootstrap.Form.Group>
                            <ReactBootstrap.Button variant="primary" type="submit" className="EditBtnMargin">
                               Save 
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

export default EditUser;
