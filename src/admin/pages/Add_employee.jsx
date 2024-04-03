import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function Add_employee() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/employee`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:""
    });

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=(e)=>{
        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name field is required !');
            result=false;
            return false;
        }
        if(formvalue.email=="")
        {
            toast.error('Email field is required !');
            result=false;
            return false;
        }
        if(formvalue.password=="")
        {
            toast.error('Password field is required !');
            result=false;
            return false;
        }
        if(formvalue.mobile=="")
        {
            toast.error('Mobile field is required !');
            result=false;
            return false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res= await axios.post(`http://localhost:3000/employee`,formvalue);
            setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
            toast.success('Employee added success');
            return false;
        }
    }
    return (
        <div>
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right" /> Add Employee</h3>
                    {/* BASIC FORM ELELEMNTS */}
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Add Employee</h4>
                                <form className="form-horizontal style-form" method="get">
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">E-mail</label>
                                        <div className="col-sm-10">
                                            <input type="email" name="email" onChange={changeHandel} value={formvalue.email} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" name="password" onChange={changeHandel} value={formvalue.password} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">mobile</label>
                                        <div className="col-sm-10">
                                            <input type="number" name="mobile" onChange={changeHandel} value={formvalue.mobile} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                        <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>{/* col-lg-12*/}
                    </div>{/* /row */}
                </section>{/* --/wrapper --*/}
            </section>{/* /MAIN CONTENT */}
        </div>

    )
}

export default Add_employee