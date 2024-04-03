import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';

function Adminheader() {

    const redirect=useNavigate();
    useEffect(()=>{
        if(!(localStorage.getItem('adminid')))
        {
            redirect('/admin');
        }
    },[]);

    const adminlogout = () => {
        localStorage.removeItem('aname');
        localStorage.removeItem('adminid');
        toast.success('Logout Succes');
        redirect('/admin');
    
      }

    return (
        <div>

            <Helmet>


                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <meta name="author" content="Dashboard" />
                <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina" />

                <title>DASHGUM - FREE Bootstrap Admin Template</title>


                <link href="assets/css/bootstrap.css" rel="stylesheet" />

                <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="assets/css/zabuto_calendar.css" />
                <link rel="stylesheet" type="text/css" href="assets/js/gritter/css/jquery.gritter.css" />
                <link rel="stylesheet" type="text/css" href="assets/lineicons/style.css" />


                <link href="assets/css/style.css" rel="stylesheet" />
                <link href="assets/css/style-responsive.css" rel="stylesheet" />

                <script src="assets/js/chart-master/Chart.js"></script>


                <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>


            </Helmet>
            <div>
                <header className="header black-bg">
                    <div className="sidebar-toggle-box">
                        <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation" />
                    </div>
                    {/*logo start*/}
                    <a href="index.html" className="logo"><b>DASHGUM FREE</b></a>
                    {/*logo end*/}

                    <div className="top-menu">
                        <ul className="nav pull-right top-menu">
                            <li><a className="logout" href="javascript:void(0)" onClick={adminlogout}>Logout</a></li>
                        </ul>
                    </div>
                </header>

                <aside>
                    <div id="sidebar" className="nav-collapse ">
                        {/* sidebar menu start*/}
                        <ul className="sidebar-menu" id="nav-accordion">
                            <p className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg" className="img-circle" width={60} /></a></p>
                            <h5 className="centered">Marcel Newman</h5>
                            <li className="mt">
                                <NavLink to="/dashboard">
                                    <i className="fa fa-dashboard" />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="sub-menu">
                                <a href="javascript:;">
                                    <i className="fa fa-desktop" />
                                    <span>Categories</span>
                                </a>
                                <ul className="sub">
                                    <li><NavLink to="/add_categories">Add</NavLink></li>
                                    <li><NavLink to="/manage_categories">Manage</NavLink></li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="javascript:;">
                                    <i className="fa fa-book" />
                                    <span>Services</span>
                                </a>
                                <ul className="sub">
                                    <li><NavLink to="/add_services">Add</NavLink></li>
                                    <li><NavLink to="/manage_services">Manage</NavLink></li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="javascript:;">
                                    <i className="fa fa-user" />
                                    <span>Employee</span>
                                </a>
                                <ul className="sub">
                                    <li><NavLink to="/add_employee">Add</NavLink></li>
                                    <li><NavLink to="/manage_employee">Manage</NavLink></li>
                                </ul>
                            </li>
                            <li className="mt">
                                <NavLink to="/manage_user">
                                    <i className="fa fa-user" />

                                    <span>Manage User</span>
                                </NavLink>
                            </li>

                            <li className="mt">
                                <NavLink to="/manage_contact">
                                    <i class="fa fa-user"></i>
                                    <span>Manage Contacts</span>
                                </NavLink>
                            </li>

                            <li className="sub-menu">
                                <a href="javascript:;">
                                    <i className="fa fa-user" />
                                    <span>Blogs</span>
                                </a>
                                <ul className="sub">
                                    <li><NavLink to="/add_blogs">Add</NavLink></li>
                                    <li><NavLink to="/manage_blogs">Manage</NavLink></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </aside>
            </div>



            <Helmet>

                <script src="assets/js/bootstrap.min.js"></script>
                <script class="include" type="text/javascript" src="assets/js/jquery.dcjqaccordion.2.7.js"></script>
                <script src="assets/js/jquery.scrollTo.min.js"></script>
                <script src="assets/js/jquery.nicescroll.js" type="text/javascript"></script>
                <script src="assets/js/jquery.sparkline.js"></script>



                <script src="assets/js/common-scripts.js"></script>

                <script type="text/javascript" src="assets/js/gritter/js/jquery.gritter.js"></script>
                <script type="text/javascript" src="assets/js/gritter-conf.js"></script>


            </Helmet>

        </div>


    )
}

export default Adminheader