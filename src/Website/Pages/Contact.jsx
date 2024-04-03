import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Contact() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contacts`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        massage: ""
    });
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = (e) => {
        var result = true;
        if (formvalue.name == "") {
            alert('Name field is required !');
            result = false;
        }
        if (formvalue.email == "") {
            alert('Email field is required !');
            result = false;
        }
        if (formvalue.mobile == "") {
            alert('Mobile field is required !');
            result = false;
        }
        if (formvalue.massage == "") {
            alert('Massage field is required !');
            result = false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/contacts`, formvalue);
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", massage: "" });
            alert('Contact added success');
            return false;
        }
    }
    return (
        <div>
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container">
                                <h2>Contact Us</h2>
                                <form id="contactForm">
                                    <div className="form-group">
                                        <label For="name">Name:</label>
                                        <input type="text" onChange={changeHandel} name="name" value={formvalue.name} className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label For="email">Email address:</label>
                                        <input type="email" onChange={changeHandel} name="email" value={formvalue.email} className="form-control" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label For="mobile">Mobile:</label>
                                        <input type="number" onChange={changeHandel} name="mobile" value={formvalue.mobile} className="form-control" id="mobile" required />
                                    </div>
                                    <div className="form-group">
                                        <label For="massage">Enter your Massage:</label>
                                        <textarea type="text" name="massage" onChange={changeHandel} value={formvalue.massage} className="form-control" ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                            <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                                        </label>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/* end about section */}
        </div>






    )
}

export default Contact