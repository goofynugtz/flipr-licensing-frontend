import { Routes, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
//import Pagenotfound from "./pages/Pagenotfound";
import Register from './pages/Auth/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";
import Dashboard from './pages/user/Dashboard';
//import Verification from './pages/Auth/Verification';
//import PrivateRoute from "./components/Layout/Routes/Private";
import ForgotPassword from './pages/Auth/ForgotPassword';
import IssueLicense from "./pages/user/IssueLicense";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />*/}
        {/*<Route path="/" element={<Login />} />*/}
        <Route path="/accounts/login" element={<Login />} />
        {/*<Route path="/dashboard" element={<PrivateRoute/>}>
           <Route path="" element={<Dashboard />} />
  </Route>*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts/signup" element={<Register />} />
        <Route path="/accounts/forgot-password" element={<ForgotPassword/>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/api/issue" element={<IssueLicense />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        {/* <Route path="*" element={<Pagenotfound />} />*/}
      </Routes>
    </>
  );
}

export default App;
