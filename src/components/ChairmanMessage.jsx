import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import ChairmanImage from '../assets/image/ChairmanMessage.jpg';

export default function ChairmanMessage() {
    return (
        <div>
            <TopHeader />
            <NavHeader />
            <img style={{ width: '100%', height: 'auto' }} src={ChairmanImage} alt="" />
            <div style={{ width: '90%', marginLeft: '5%', padding: '40px 20px' }} className="Message">
                <p> Assalam-o-Alaikum</p>
                <br />
                <p style={{ textAlign: 'justify' }}>Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? ( Surat Baqara, Verse 245)</p>
                <br />
                <p style={{ textAlign: 'justify' }}>It should be noted that Allah, who is in need of no one and nothing, instills upon his men to give Qarz-e-Hasana because it is in man’s nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way. He says,Oh children of Adam! Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich, who should not be stingy in spending their money on those worse off than themselves. Allah will not only take strict accountability from those people but He will also punish them accordingly. On the Day Of Judgement, the rich will be humiliated because they did not help the needy. The needy will complain to Allah and say that all those men on whom you graciously bestowed the rights of wealth showed negligence in its proper use; they were busy spending on themselves and forgot about us, the ones who needed it. Allah will reply to this and say: “I swear on my respect and glory! I will bring you closer to me and push them further away.”</p>
                <br />
                <p style={{ textAlign: 'justify' }}>Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other donations to help us help those in need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.</p>
                <br />
                <p className="bold">Muhammad Bashir Farooqi</p>
                <br />
                <p className="bold">Saylani Welfare International Trust</p>
            </div>
            <Footer />
        </div>
    );
}