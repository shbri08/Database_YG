import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './style/Login.css';

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                console.log(res.data.message);
                navigate('/HomeLogged'); // Redirect after successful login
            })
            .catch(err => {
                console.error(err.response?.data?.message || "An error occurred");
                setErrorMessage(err.response?.data?.message || "Invalid credentials");
            });
    };
    return (
        <>
            <header>
                <img src="/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="login-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Log in YGEntertainment Account</p>

                    {errorMessage && <p className="error">{errorMessage}</p>}

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="login-button">Log In</button>
                    </form>

                    <div className="links">
                        <p>Forgot Password? <Link to="/Reset" className="Reset">Log In</Link></p>
                        <p>Don't have an account? <Link to="/Regis" className="regis">Sign up</Link></p>
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
};

export default Login;
