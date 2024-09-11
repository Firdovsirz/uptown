import React from 'react';
import "../Footer/Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
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
                <div className='footer-about'></div>
                <div className='footer-company'></div>
                <div className='footer-question'></div>
            </div>
            <div></div>
        </footer>
    )
}
