import React from 'react';
// import '../assets/css/education.css'
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Saylani-Dastarkhwan.jpg';
export default function SaylaniDastarkhwan() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <h2 style={{ margin: '20px 5%' }}>SAYLANI WELFARE INTERNATIONAL TRUST KARACHI ALL BRANCHES & FOOD SHADES</h2>
            <div className="AvailProgram">
                <div className="program">
                    <h3>CLIFTON</h3>
                </div>
                <div className="program">
                    <h3>PUNJAB CHOWRANGI</h3>
                </div>
                <div className="program">
                    <h3>SAYLANI HOUSE PHASE 2</h3>
                </div>
                <div className="program">
                    <h3>TOUHEED COMMERICAL</h3>
                </div>
                <div className="program">
                    <h3>BADAR COMMERICAL</h3>
                </div>
                <div className="program">
                    <h3>SEHAR COMMERICAL</h3>
                </div>
                <div className="program">
                    <h3>DHA DALTON</h3>
                </div>
                <div className="program">
                    <h3>KORANGI 4</h3>
                </div>
                <div className="program">
                    <h3>ALIABAD</h3>
                </div>
                <div className="program">
                    <h3>AMER HAMZA</h3>
                </div>
                <div className="program">
                    <h3>GULSHAN MASKAN</h3>
                </div>
            </div>
            <p style={{ margin: '20px 5%', textAlign: 'justify' }}>
                Determined to alleviate the burden of hunger for the poor, we have set up a Saylani Dastarkhan at various Saylani branches across Pakistan where the needy are fed twice a day, every day. Although this is a very small contribution, it is our small way of removing the fear of uncertainty for the poor who often do not know whether they will have a meal to eat next or not. With our service, they know that there is always a place where they can eat 365 days a year, and no one needs to sleep hungry at night.
                <br /> <br />Everyone is welcome here and all our food is prepared and served with the highest quality and hygiene. Fresh and wholesome meals are provided with menus rotating between vegetables or pulses alongside mutton (goat). These meals cost Rs. 50 per meal allowing our guests to save up to Rs. 5,000 per month. The saved money is invaluable to the poor and can be used by them to meet their other needs and expenditures. <br /> <br />We are pleased to say that more than 100,000 people are being fed across Pakistan daily. Each person is served with respect and dignity and it is our highest honor to serve them.
            </p>
            <Footer />
        </>
    );
}