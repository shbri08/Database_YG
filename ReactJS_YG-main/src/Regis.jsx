import { Link } from "react-router-dom";
import "./style/Login.css";
import { useState } from "react";
import axios from 'axios';

function Regis  () {
    const [values, setValues] = useState({
        name:'',
        email:'',
        phonenumber:'',
        password:''
        
    })
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    
    const handlesubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/signup',{values})
        .then(res => console.log("Registered Succesfully"))
        .catch(err => console.log(err));
    }
    return (
        <>
            <header>
                <img src="/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="login-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Sign Up YGEntertainment Account</p>
            
                    <form onSubmit={handlesubmit}>
                        <label htmlFor="name">Fullname</label>
                        <input type="text" name="name" id="name" placeholder="Enter Fullname" onChange={handleChange} required />

                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="text" name="phonenumber" id="phonenumber" placeholder="Enter Phone Number" onChange={handleChange} required />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="your@email.com" onChange={handleChange} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Your password" onChange={handleChange} required />

                        <button type="submit">Sign Up</button>
                    </form>

                    <div className="links">
                        <p>Already have an account? <Link to="/Login" className="Login">Log In</Link></p>
                    </div>
                </div>
            </main>
            
            <footer>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
                    <a href="#">Announcements</a>
                </div>
                <div className="footer-info">
                    <p>Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312 FAX (+62)21-4242-6565</p>
                    <p>ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130</p>
                    <p>© BRAND COMPANY Inc.</p>
                </div>
            </footer>
        </>
    );
}

export default Regis;
