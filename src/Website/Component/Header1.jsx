import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header1() {

    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uname');
        localStorage.removeItem('userid');
        toast.success('Logout Succes');
        redirect('/');

    }

    return (
        <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt />
                            <span>
                                Electrochip
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="s-1"> </span>
                            <span className="s-2"> </span>
                            <span className="s-3"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about"> About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service"> Service </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blog"> Blog </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact </NavLink>
                                    </li>
                                    {(() => {
                                        if (localStorage.getItem('uname')) {
                                            return (
                                                <>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="javascript:void(0)" onClick={userlogout}>Logout</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/profile">
                                                            <i className='fa fa-user'>{localStorage.getItem('uname')}</i>
                                                        </NavLink>
                                                    </li>
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                                </li>
                                            )
                                        }
                                    })()}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* end header section */}
            {/* slider section */}
            <section className=" slider_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="detail_box">
                                <h1>
                                    Electrical <br />
                                    Service <br />
                                    Providers
                                </h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                                </p>
                                <Link to="/contact" className="">
                                    Contact Us
                                </Link></div><a href className>
                            </a></div><a href className>
                        </a><div className="col-lg-5 col-md-6 offset-lg-1"><a href className>
                        </a><div className="img_content"><a href className>
                            <div className="img_container">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="img-box">
                                                <img src="images/slider-img.jpg" alt />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src="images/slider-img.jpg" alt />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src="images/slider-img.jpg" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a><a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end slider section */}
        </div>

    )
}

export default Header1