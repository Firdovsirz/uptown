import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeIntroSection from '../../sections/Home/HomeIntroSection/HomeIntroSection';

export default function Home() {
    return (
        <>
            <Header />
            <main className='home-main'>
                <HomeIntroSection />
            </main>
            <Footer />
        </>
    )
}
