import React from "react";
import "../styles/DashboardStyles.css"

async function wanker(e) {
    e.preventDefault()

    console.log("fuck")
    console.log("fuck")
    console.log("fuck")
    console.log("fuck")
    var form = new FormData()
    form.append('Id', 1)
    form.append('Email', 'www')
    const response = await fetch('/register/CreateUser', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(form)
    });
    //console.log(await response.json());
    console.log(response)
}

function MyAccount() {

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" name="Email" className="form-control" id="exampleFirstName" placeholder="Email" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" name="UserName" className="form-control" id="exampleInputEmail" placeholder="UserName" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="Password" name="Password" className="form-control" id="exampleLastName" placeholder="Password" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="Password" name="ConfirmPassword" className="form-control" id="exampleLastName" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <button type="submit" onClick={wanker} className="btn btn-primary  btn-block">
                                        Create User
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
