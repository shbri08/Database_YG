import { Link } from "react-router-dom";
import "./style/PrivacyPolicy.css"

const PrivacyPolicy = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img
                        src="/images/img/logo_YG.png"
                        alt="YG Entertainment Logo"
                        className="logo"
                    />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/about_us_logged">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img
                        src="/images/img/profile.png"
                        alt="User Icon"
                        className="icon-img"
                    />{" "}
                    Nurzaba
                </button>

                <div className="dropdown">
                    <ul>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="#">Poin</Link>
                        </li>
                        <li>
                            <Link to="#">Transaction</Link>
                        </li>
                        <li>
                            <Link to="#">Profile</Link>
                        </li>
                        <li>
                            <Link to="#">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </header>

            <h1 className="title">Privacy Policy</h1>
            <div className="container">
                <p className="update-date">
                    Last Updated: [October 21, 2024]
                </p>
                <p className="intro">
                    Welcome to YGConnect (https://www.ygconnect.com). This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your personal information when you visit our
                    website. We are committed to protecting your privacy and
                    ensuring a secure user experience. Please read this policy
                    carefully to understand how we handle your personal data.
                </p>

                <div className="policy-section">
                    <h2>1. Information We Collect</h2>
                    <p>We collect the following types of personal information from users:</p>
                    <ul>
                        <li>
                            Contact Information: Your name, email address,
                            phone number, and physical address (city, province,
                            postal code).
                        </li>
                        <li>
                            Social Media: Information from your social media
                            profile, if you choose to connect it to our website.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>We use your personal data for various purposes, including:</p>
                    <ul>
                        <li>Providing, operating, and maintaining our website</li>
                        <li>
                            Processing transactions and sending updates related
                            to your interactions with YGConnect
                        </li>
                        <li>Improving our website based on user feedback</li>
                        <li>
                            Communicating with you, including responding to
                            customer service inquiries
                        </li>
                        <li>
                            Sending marketing and promotional information, with
                            your consent
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>3. Sharing Your Information</h2>
                    <p>
                        We do not share, sell, or rent your personal information
                        to third parties, except as necessary to provide our
                        services (e.g., with our trusted business partners) or
                        as required by law.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>4. Security of Your Information</h2>
                    <p>
                        We employ reasonable measures to protect your
                        information from unauthorized access and misuse.
                        However, no data transmission or storage system can be
                        guaranteed as completely secure.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>5. Your Privacy Rights</h2>
                    <p>
                        As a resident of Indonesia, you may have the right to
                        request access to, correction of, or deletion of your
                        personal data. To exercise these rights, please contact
                        us at the provided contact information below.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have questions or concerns about this Privacy
                        Policy, you can contact us at:
                    </p>
                    <p>
                        Address: Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1,
                        Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
                        Daerah Khusus Ibukota Jakarta 12130
                        <br />
                        Phone: (021-3452-1312)
                    </p>
                </div>

                <div className="policy-section">
                    <h2>7. Updates to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically. The
                        latest version will be posted on our website, with the
                        date of last revision indicated.
                    </p>
                </div>
            </div>

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

export default PrivacyPolicy;
