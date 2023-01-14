//import React, { useState, setState } from 'react';
//import './style.css'
//function RegistrationForm() {

//    const [firstName, setFirstName] = useState(null);
//    const [lastName, setLastName] = useState(null);
//    const [email, setEmail] = useState(null);
//    const [password, setPassword] = useState(null);
//    const [confirmPassword, setConfirmPassword] = useState(null);

//    const handleInputChange = (e) => {
//        const { id, value } = e.target;
//        if (id === "firstName") {
//            setFirstName(value);
//        }
//        if (id === "lastName") {
//            setLastName(value);
//        }
//        if (id === "email") {
//            setEmail(value);
//        }
//        if (id === "password") {
//            setPassword(value);
//        }
//        if (id === "confirmPassword") {
//            setConfirmPassword(value);
//        }

//    }

//    const handleSubmit = () => {
//        console.log(firstName, lastName, email, password, confirmPassword);
//    }

//    return (
//        <div className="form">
//            <div className="form-body">
//                <div className="username">
//                    <label className="form__label" for="firstName">First Name </label>
//                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
//                </div>
//                <div className="lastname">
//                    <label className="form__label" for="lastName">Last Name </label>
//                    <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
//                </div>
//                <div className="email">
//                    <label className="form__label" for="email">Email </label>
//                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
//                </div>
//                <div className="password">
//                    <label className="form__label" for="password">Password </label>
//                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
//                </div>
//                <div className="confirm-password">
//                    <label className="form__label" for="confirmPassword">Confirm Password </label>
//                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
//                </div>
//            </div>
//            <div class="footer">
//                <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
//            </div>
//        </div>

//    )
//}

//export default RegistrationForm

import React, { useState } from 'react'
import axios from 'axios';
function Regster() {
    const [data, setdata] = useState({ Email: '', Password: '', UserName: '' })
    const apiUrl = "http://localhost:1680/Register/CreateUser";
    const Registration = (e) => {
        e.preventDefault();
        debugger;
        const data1 = { Email: data.Email, Password: data.Password, UserName: data.UserName };
        axios.post(apiUrl, data1)
            .then((result) => {
                debugger;
                console.log(result.data);
                if (result = 'Invalid')
                    alert('Invalid User');
                else
                /*props.history.push('/Dashboard')*/
                    console.log("wank")
            })
    }
    const onChange = (e) => {
        e.persist();
        debugger;
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>
                    Add New Contact
                </div>
            </div>
            <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>
                                </div>
                                <form onSubmit={Registration} class="user">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleFirstName" placeholder="Email" />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" name="UserName" onChange={onChange} value={data.UserName} class="form-control" id="exampleInputEmail" placeholder="UserName" />
                                        </div>
                                        <div class="col-sm-6"> 
                                            <input type="Password" name="Password" onChange={onChange}alue={data.Password} class="form-control" id="exampleLastName" placeholder="Password" />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="Password" name="ConfirmPassword" onChange={onChange} value={data.ConfirmPssword} class="form-control" id="exampleLastName" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary  btn-block">
                                        Create User
                                    </button>
                                    <hr />
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regster  