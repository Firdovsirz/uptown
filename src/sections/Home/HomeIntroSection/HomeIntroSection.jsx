import React from 'react';
import "../HomeIntroSection/HomeIntroSection.css";
import SearchIcon from '@mui/icons-material/Search';

export default function HomeIntroSection() {
    return (
        <section className='home-intro-section'>
            <div className='home-intro-txt'>
                <h1>
                    The Simplest Way to Find Property
                </h1>
                <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts
                </p>
                <div className='home-intro-search'>
                    <form action="">
                        <input type="text" placeholder='Search location' />
                    </form>
                    <div className='home-intro-search-icon'>
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}
