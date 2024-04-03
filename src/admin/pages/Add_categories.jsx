import axios from 'axios';
import React, {useState} from 'react'
import { toast } from 'react-toastify';

function Add_categories() {

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        img:""
    });

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=()=>{
        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name field is required !');
            result=false;
            return false;
        }
        if(formvalue.img=="")
        {
            toast.error('Img field is required !');
            result=false;
            return false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res= await axios.post(`http://localhost:3000/categories`,formvalue);
            setFormvalue({...formvalue,name:"",img:""});
            toast.success('Categories add success');
            return false;
        }
    }
    return (
        <div>
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right" /> Add Categories</h3>
                    {/* BASIC FORM ELELEMNTS */}
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Add Categories</h4>
                                <form className="form-horizontal style-form" method="get">
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Categories</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Image URL</label>
                                        <div className="col-sm-10">
                                            <input type="url" name="img" onChange={changeHandel} value={formvalue.img} className="form-control" />
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

export default Add_categories