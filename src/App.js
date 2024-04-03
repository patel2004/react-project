
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header1 from './Website/Component/Header1';
import Index from './Website/Pages/Index';
import About from './Website/Pages/About';
import Service from './Website/Pages/Service';
import Blog from './Website/Pages/Blog';
import Contact from './Website/Pages/Contact';
import Header2 from './Website/Component/Header2';
import Footer from './Website/Component/Footer';
import Profile from './Website/Pages/Profile';
import Editprofile from './Website/Pages/Editprofile';

import Admin_login from './admin/pages/Admin_login';
import Admin_dashboard from './admin/pages/Admin_dashboard';
import Adminheader from './admin/component/Adminheader';
import Adminfooter from './admin/component/Adminfooter';
import Add_categories from './admin/pages/Add_categories';
import Manage_categories from './admin/pages/Manage_categories';
import Add_services from './admin/pages/Add_services';
import Manage_services from './admin/pages/Manage_services';
import Add_employee from './admin/pages/Add_employee';
import Manage_employee from './admin/pages/Manage_employee';
import Manage_user from './admin/pages/Manage_user';
import Login from './Website/Pages/Login';
import Signup from './Website/Pages/Signup';
import Manage_contact from './admin/pages/Manage_contact';
import Add_blogs from './admin/pages/Add_blogs';
import Manage_blogs from './admin/pages/Manage_blogs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import View from './Website/Pages/View';





function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>

        {/* Website */}

        <Route path="/" element={<><Header1 /><Index /><Footer /></>}></Route>
        <Route path="/about" element={<><Header2 /><About /><Footer /></>}></Route>
        <Route path="/service" element={<><Header2 /><Service /><Footer /></>}></Route>
        <Route path="/View/:id" element={<><Header2 /><View /><Footer /></>}></Route>
        <Route path="/blog" element={<><Header2 /><Blog /><Footer /></>}></Route>
        <Route path="/contact" element={<><Header2 /><Contact /><Footer /></>}></Route>
        <Route path="/login" element={<><Header2/><Login /></>}></Route>
        <Route path="/signup" element={<><Header2/><Signup /></>}></Route>
        <Route path="/profile" element={<><Header2/><Profile /></>}></Route>
        <Route path="/editprofile/:id" element={<><Header2/><Editprofile/></>}></Route>


        {/* Admin */}


        <Route path="/admin" element={<> <Admin_login /> </>}></Route>
        <Route path="/dashboard" element={<> <Adminheader /> <Admin_dashboard /> <Adminfooter /> </>}></Route>
        <Route path="/add_categories" element={<> <Adminheader /> <Add_categories /> <Adminfooter /> </>}></Route>
        <Route path="/manage_categories" element={<> <Adminheader /> <Manage_categories /> <Adminfooter /> </>}></Route>
        <Route path="/add_services" element={<> <Adminheader /> <Add_services /> <Adminfooter /> </>}></Route>
        <Route path="/manage_services" element={<> <Adminheader /> <Manage_services /> <Adminfooter /> </>}></Route>

        <Route path="/add_employee" element={<> <Adminheader /> <Add_employee /> <Adminfooter /> </>}></Route>
        <Route path="/manage_employee" element={<> <Adminheader /> <Manage_employee /> <Adminfooter /> </>}></Route>

        <Route path="/manage_user" element={<> <Adminheader /> <Manage_user /> <Adminfooter /> </>}></Route>

        <Route path="/manage_contact" element={<> <Adminheader /> <Manage_contact /> <Adminfooter /> </>}></Route>

        <Route path="/add_blogs" element={<> <Adminheader /> <Add_blogs /> <Adminfooter /> </>}></Route>
        <Route path="/manage_blogs" element={<> <Adminheader /> <Manage_blogs /> <Adminfooter /> </>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
