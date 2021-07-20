import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Online-Quran-Admission.jpeg';


export default function OnlineQuranAdmission() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%' }} alt="" />
            <p style={{ margin: '50px 10%' }}>
                Saylani offers an interactive online Quran Academy program that enables people from anywhere in the world to learn Quran with Tajweed. Live Quran teachers are present on voice call and our lessons are equally beneficial for kids and adults (of any age).
                <br />
                <br />
                Memorization of Quran is another great course offered by Saylani online Quran Academy. We have 325 students from these countries
                <br />
                <br />
                1.Saudi Arab 2.Behreen 3.Germany 4.Dubai 5.India 6.Uk 7.Canada 8.America 9.Malaysia 10.Italy 11.France 12.Japan 13.England 14.Ireland 15.Australia 16.Austria 17.Burma 18.Muscat 19.Bangladesh 20 Abu Dhabi
                <br />
                <br />
            </p>
            <Footer />
        </>
    )
}