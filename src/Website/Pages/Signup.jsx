import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Signup() {

    const redirect=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('userid'))
        {
            redirect('/');
        }
    },[]);

    const [formvalue, setFormvalue] = useState({
        id:"",
        img:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:""
    });
    const changeHandel = (e) => {
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation = () => {
        var result = true;
        if (formvalue.img == "") {
            alert('Image field is required !');
            result = false;
        }
        if (formvalue.name == "") {
            alert('Name field is required !');
            result = false;
        }
        if (formvalue.email == "") {
            alert('Email field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            alert('Password field is required !');
            result = false;
        }
        if (formvalue.mobile == "") {
            alert('Mobile field is required !');
            result = false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res= await axios.post(`http://localhost:3000/user`,formvalue);
            setFormvalue({...formvalue,img:"",name:"",email:"",password:"",mobile:""});
            toast.success('Signup success');
            return false;
        }
    }

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form action="" method='post' onSubmit={submitHandel}>
                <div className="form-group">
                    <label For="img">Image URL:</label>
                    <input type="url" name="img" onChange={changeHandel} value={formvalue.img} className="form-control" />
                </div>
                <div className="form-group">
                    <label For="name">Name:</label>
                    <input type="text" onChange={changeHandel} name="name" value={formvalue.name} className="form-control" id="name" required />
                </div>
                <div className="form-group">
                    <label For="email">Email address:</label>
                    <input type="email" onChange={changeHandel} name="email" value={formvalue.email} className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label For="pwd">Password:</label>
                    <input type="password" onChange={changeHandel} name="password" value={formvalue.password} className="form-control" id="password" required />
                </div>
                <div className="form-group">
                    <label For="mobile">Mobile:</label>
                    <input type="number" onChange={changeHandel} name="mobile" value={formvalue.mobile} className="form-control" id="mobile" required />
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                        <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                    </label>
                </div>

            </form>
            <div className="text-center">
                If you already registered ..<Link to="/login">Login</Link>
            </div>
        </div>

    )
}

export default Signup