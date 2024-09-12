import React from 'react';
import "../Footer/Footer.css";
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Footer() {
    return (
        <footer>
            <div className='footer-main'>
                <div className='footer-uptown'>
                    <h2>Uptown</h2>
                    <div className='footer-uptown-desc'>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                    <div className='footer-uptown-social'>
                        <ul>
                            <li>
                                <TwitterIcon style={{ color: "#e86ed0", fontSize: 35, marginRight: 15 }} />
                            </li>
                            <li>
                                <FacebookIcon style={{ color: "#e86ed0", fontSize: 35, marginRight: 15 }} />
                            </li>
                            <li>
                                <InstagramIcon style={{ color: "#e86ed0", fontSize: 35, marginRight: 15 }} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-community'>
                    <h2>Community</h2>
                    <ul>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Search Properties
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            For Agents
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Review
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            FAQs
                        </li>
                    </ul>
                </div>
                <div className='footer-about'>
                    <h2>About Us</h2>
                    <ul>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Our Story
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Meet the team
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Careers
                        </li>
                    </ul>
                </div>
                <div className='footer-company'>
                    <h2>Company</h2>
                    <ul>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            About Us
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Press
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Contact
                        </li>
                        <li>
                            <ArrowRightAltIcon style={{ color: "#e86ed0", marginRight: 15 }} />
                            Careers
                        </li>
                    </ul>
                </div>
                <div className='footer-question'>
                    <h2>Have a Question?</h2>
                    <ul>
                        <li>
                            <LocationOnIcon style={{ color: "#e86ed0", marginRight: 30 }} />
                            <a href="#">203 Fake St. Mountain View, San Francisco, California, USA</a>
                        </li>
                        <li>
                            <LocalPhoneIcon style={{ color: "#e86ed0", marginRight: 30 }} />
                            <a href="tel:+2 392 3929 210">+2 392 3929 210</a>
                        </li>
                        <li>
                            <MailIcon style={{ color: "#e86ed0", marginRight: 30 }} />
                            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Copyright ©2024 All rights reserved</p>
            </div>
        </footer>
    )
}
