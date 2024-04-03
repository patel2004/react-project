import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Index() {

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
            {/* service section */}
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
                                                <a href>
                                                    View Services
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </section>
            {/* end service section */}
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                    <img src="images/plug.png" alt />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit
                                </p>
                                <a href>
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img_container">
                                <div className="img-box b1">
                                    <img src="images/about-img1.jpg" alt />
                                </div>
                                <div className="img-box b2">
                                    <img src="images/about-img2.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
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
                                <div className="img-box">
                                    <img src="images/blog1.jpg" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Blog Title Goes Here
                                    </h5>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/blog2.jpg" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Blog Title Goes Here
                                    </h5>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog section */}
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container ">
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form action>
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" />
                                </div>
                                <div className="d-flex ">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section */}
        </div>

    )
}

export default Index