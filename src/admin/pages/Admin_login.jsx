import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Admin_login() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('adminid'))
        {
            redirect('/dashboard');
        }
        else
        {
            
        }
    },[]);

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {
        var result = true;
        if (formvalue.email == "") {
            toast.error('Email field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('Password field is required !');
            result = false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    // session 
                    localStorage.setItem('aname', res.data[0].name);
                    localStorage.setItem('adminid', res.data[0].id);
                    toast.success('Login Successful');
                    redirect('/dashboard');
                }
                else {
                    setFormvalue({ ...formvalue, email: "", password: "" });
                    toast.error("Password not match");
                    return false;
                }
            }
            else {
                setFormvalue({ ...formvalue, email: "", password: "" });
                toast.error("Email Doesn't exist");
                return false;
            }
        }
    }

    return (
        <div id="login-page">
            <div className="container">
                <form className="form-login" action=" " method="post" onSubmit={submitHandel}>
                    <h2 className="form-login-heading">Log In Now</h2>
                    <div className="login-wrap">
                        <input type="text" onChange={changeHandel} name="email" value={formvalue.email} className="form-control" placeholder="email" autofocus />
                        <br />
                        <input type="password" onChange={changeHandel} name="password" value={formvalue.password} className="form-control" placeholder="Password" />
                        <label className="checkbox">
                            <span className="pull-right">
                                <Link data-toggle="modal" to=""> Forgot Password?</Link>
                            </span>
                        </label>
                        <button className="btn btn-theme btn-block" href="index.html" type="submit"><i className="fa fa-lock" /> SIGN IN</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Admin_login