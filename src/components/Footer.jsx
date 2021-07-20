import React from "react";
import '../assets/css/Footer.css';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function App() {
    return (
        <div>
            <div className="topFooter">
                <div className="mainDiv">
                    <p>Head Office,</p>
                    <p>A-25, Bahadurabad Chowrangi Karachi, Pakistan</p>
                    <div className="callinfo"><PhoneIcon style={{ color: '#fff' }} /><p>UAN: 111-729-526</p></div>
                    <div className="callinfo"><PhoneIcon style={{ color: '#fff' }} /><p>CELL: 92-311-1729526</p></div>
                    <div className="callinfo"><PhoneIcon style={{ color: '#fff' }} /><p>USA NO +1(716)941 7792</p></div>
                    <div className="callinfo"><PhoneIcon style={{ color: '#fff' }} /><p>UK NO (+44)115 970 6256</p></div>
                    <div className="callinfo"><MailOutlineIcon style={{ color: '#fff' }} /><p>info@saylaniwelfare.com</p></div>
                    <div className="callinfo"><LanguageIcon style={{ color: '#fff' }} /><p>(+0092-213) 4130786-90</p></div>
                </div>
                <div className="mainDiv">
                    <h4>Useful Links</h4>
                    <progress className="progresss" value="40" max="100"></progress>
                </div>
                <div className="mainDiv">
                    <h4>Connect With Us</h4>
                    <div className="sclIcon">
                        <div><FacebookIcon /></div>
                        <div><TwitterIcon /></div>
                        <div><InstagramIcon /></div>
                        <div><YouTubeIcon /></div>
                        <div><WhatsAppIcon /></div>
                    </div>
                </div>
            </div>
            <div className="bottomFooter">
                <p>Copyright © 2020 Saylani Welfare</p>
            </div>
        </div>
    );
}
