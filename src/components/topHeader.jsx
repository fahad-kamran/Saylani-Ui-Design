import '../assets/css/topHeader.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Header() {
  return (
    <div className="topHeader">
      <div className="socialIcon">
        <FacebookIcon className="icon" style={{ fontSize: '20px' }} />
        <TwitterIcon className="icon" style={{ fontSize: '20px' }} />
        <InstagramIcon className="icon" style={{ fontSize: '20px' }} />
        <YouTubeIcon className="icon" style={{ fontSize: '20px' }} />
        <WhatsAppIcon className="icon" style={{ fontSize: '20px' }} />
      </div>
      <div className="myPara">
        <p>Millions of people's life has changed, millions more awaiting your donation</p>
      </div>
      <div className="myBtn">
        <button>UK Donor</button>
        <button>Donate Now</button>
        <button>PIAIC Fee</button>
      </div>
    </div>
  );
}

export default Header;
