import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Service() {

    const redirect = useNavigate();

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res);
        setData(res.data);
    }
    return (
        <div>


            <section className="service_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Categories
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>

                    <div className="service_container">

                        {
                            data.map((value, index) => {
                                return (

                                    <div className="box">
                                        <div>
                                            <img src={value.img} className="img1" alt />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {value.name}
                                            </h5>
                                            
                                            <div className="btn-box">
                                            <a href="javascript:void(0)" onClick={()=>redirect('/View/'+value.id)}> View Service </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </section>


        </div>

    )
}

export default Service