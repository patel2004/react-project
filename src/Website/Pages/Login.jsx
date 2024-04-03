import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {

    const redirect=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('userid'))
        {
            redirect('/');
        }
    },[]);

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormvalue({...formvalue,[e.target.name]:e.target.value });
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
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            if(res.data.length>0)
            {
                if(res.data[0].password==formvalue.password)
                {
                       
                        if(res.data[0].status=="Unblock")
                        {    
                            // session 
                            localStorage.setItem('uname',res.data[0].name);
                            localStorage.setItem('userid',res.data[0].id);
                            
                            toast.success('Login Success');
                            redirect('/');
                        }
                        else
                        {
                            setFormvalue({...formvalue,email:"",password:""});
                            toast.error("Blocked Account !");
                            return false;        
                        }
                }
                else
                {
                    setFormvalue({...formvalue,email:"",password:""});
                    toast.error("Password not match");
                    return false;    
                }
            }
            else
            {
                setFormvalue({...formvalue,email:"",password:""});
                toast.error("Email Doesn't Exist");
                return false;
            }
        }
    }
    return (
        <div>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Login Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form action="" method="post" onSubmit={submitHandel}>
                                <div>
                                    <input type="email" className='form-control' name='email'  value={formvalue.email} onChange={changeHandel} placeholder="email" />
                                </div>
                                <div>
                                    <input type="password" name='password' className='form-control' value={formvalue.password} onChange={changeHandel} placeholder="password" />
                                </div>

                                <div className="d-flex ">
                                    <button type='submit' name='submit'>
                                        Login
                                    </button>
                                    <Link to="/signup">If you not Registered then Click here</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            {/* end contact section */}
        </div>

    )
}

export default Login