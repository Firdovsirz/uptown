import React from 'react';
import "../Header/Header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <p className='logo-txt'>Uptown</p>
                <div className='nav-pages'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Agent</li>
                        <li>Services</li>
                        <li>Properties</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
