import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_employee() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/employee`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteid = async (id) => {
        const res = await axios.delete(`http://localhost:3000/employee/${id}`);
        //console.log(res);
        fetch();
    }

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        mobile:""
    });

    const [editid,setid]=useState("");
    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/employee/${id}`);
        console.log(res);
        setFormvalue(res.data);
        setid(res.data.id);
    }
   
    const changeHandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=()=>{
        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name is required !');
            result=false;
            return false;
        }
        if(formvalue.email=="")
        {
            toast.error('Email is required !');
            result=false;
            return false;
        }
        if(formvalue.mobile=="")
        {
            toast.error('Mobile is required !');
            result=false;
            return false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res= await axios.patch(`http://localhost:3000/employee/${editid}`,formvalue);
            setFormvalue({...formvalue,name:"",email:"",mobile:""});
            toast.success('Updated successfully');
            fetch();

        }
    }

    return (
        <div>
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right" /> Manage Employee</h3>

                    <div className="row mt">
                        <div className="col-md-12">
                            <div className="content-panel">
                                <h4><i className="fa fa-angle-right" /> Manage Employee</h4><hr /><table className="table table-striped table-advance table-hover">
                                    <thead>
                                        <tr>
                                            <th><i className="fa fa-bullhorn" /> ID</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>Password </th>
                                            <th>Mobile </th>
                                            <th>Status </th>    
                                            
                                            <th><i className=" fa fa-edit" /> Action</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((value,index,arr) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value.id}</td>  
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.password}</td>
                                                        <td>{value.mobile}</td>
                                                        <td>{value.status}</td>
                                                        
                                                        <td>
                                                            <button className="btn btn-success btn-xs"><i className="fa fa-check" /></button>
                                                            <button className="btn btn-primary btn-xs"><i className="fa fa-pencil" data-toggle="modal" data-target="#myModal" onClick={()=>editHandel(value.id)} /></button>
                                                            <button className="btn btn-danger btn-xs"><i className="fa fa-trash-o" onClick={()=>{deleteid(value.id)}} /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                
                                        
                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            {/* Modal Header */}
                                            <div className="modal-header">
                                                <h4 className="modal-title">Update Employees</h4>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <div className="row mt">
                                                    <div className="col-lg-12">
                                                        <div className="form-panel">
                                                            <form className="form-horizontal style-form" method="get">
                                                                <div className="form-group">
                                                                    <label className="col-sm-2 col-sm-2 control-label">Name</label>
                                                                    <div className="col-sm-10">
                                                                        <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-sm-2 col-sm-2 control-label">Email</label>
                                                                    <div className="col-sm-10">
                                                                        <input type="email" name="email" onChange={changeHandel} value={formvalue.email} className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-sm-2 col-sm-2 control-label">Mobile</label>
                                                                    <div className="col-sm-10">
                                                                        <input type="mobile" name="mobile" onChange={changeHandel} value={formvalue.mobile} className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-sm-2 col-sm-2 control-label">
                                                                        <button type="submit" onClick={submitHandel} data-dismiss="modal" className="btn btn-theme">Save</button>
                                                                    </label>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>{/* col-lg-12*/}
                                                </div>
                                            </div>
                                            {/* Modal footer */}
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>{/* /content-panel */}
                        </div>{/* /col-md-12 */}
                    </div>{/* /row */}
                </section>{/* --/wrapper --*/}
            </section>{/* /MAIN CONTENT */}
        </div>

    )
}

export default Manage_employee