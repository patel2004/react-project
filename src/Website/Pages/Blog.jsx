import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Blog() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blogs`);
        console.log(res);
        setData(res.data);
    }

    return (
        <div>
            {/* blog section */}
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Blog
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                            {
                            data.map((value, index) => {
                                return (
                                    <div className="box">
                                        <div>
                                            <img src={value.img} className="img1" width="100%" alt />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {value.title}
                                            </h5>
                                            <p>
                                                {value.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        } 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog section */}
        </div>

    )
}

export default Blog