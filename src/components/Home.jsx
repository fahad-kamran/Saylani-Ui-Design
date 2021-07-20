import React from "react";
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import '../assets/css/Home.css';
import Slider1 from '../assets/image/slider/slider1.jpeg';
import Slider2 from '../assets/image/slider/slider2.png';
import Slider3 from '../assets/image/slider/slider3.jpeg';
import Slider4 from '../assets/image/slider/slider4.jpeg';
import Slider5 from '../assets/image/slider/slider5.jpg';
import Slider6 from '../assets/image/slider/slider6.jpg';
import Favicon from '../assets/image/favicon.png';
import Icon1 from '../assets/image/Icon/icon_food_png.png';
import Icon2 from '../assets/image/Icon/icon_family_png.png';
import Icon3 from '../assets/image/Icon/icon_medical_png.png';
import Icon4 from '../assets/image/Icon/icon_education_png.png';
import Doing1 from '../assets/image/saylaniDoing/onlinesadqah.png';
import Doing2 from '../assets/image/saylaniDoing/welfare.png';
import Doing3 from '../assets/image/saylaniDoing/medical.png';
import Doing4 from '../assets/image/saylaniDoing/Dastarkhwan.png';
import Doing5 from '../assets/image/saylaniDoing/ROPLANT.png';
import Doing6 from '../assets/image/saylaniDoing/education.png';
import Mission1 from '../assets/image/MissionAndUpcomingProject/Hepatitis.png';
import Mission2 from '../assets/image/MissionAndUpcomingProject/housing.png';
import Mission3 from '../assets/image/MissionAndUpcomingProject/IT.png';
import Mission4 from '../assets/image/MissionAndUpcomingProject/tharparkar.png';
import ImageIcon from '@material-ui/icons/Image';
import GetAppIcon from '@material-ui/icons/GetApp';
import Transimg1 from '../assets/image/food.jpg';
import Transimg2 from '../assets/image/hazrat.jpg';
import Transimg3 from '../assets/image/hazrat2.jpg';
import Transimg4 from '../assets/image/rashan2 (1).jpg';
import Transimg5 from '../assets/image/rashan2.jpg';
import GotoTop from './GotoTop';
function Home() {
  return (
    <div className="Home">
      <TopHeader />
      <NavHeader />
      <GotoTop />
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <marquee className="uper" behavior="" direction="">
        <p>(News-1 Dated:15-05-2019)  Saylani Welfare Announced "Donation Application" . More Details    (News-2 Dated:07-05-2019)  Alhamdulillah Saylani Organized 200+ Locations For Iftar And Sehri In This Holy Month . More Details    (News-3 Dated:08-03-2019)  Saylani Welfare Distributing Ration & Clothes to affected people of Balochistan. More Details    (News-4 Dated:25-02-2019)  PIAIC Entrance Exam Merit Ranking List Announced. More Details   (News-5 Dated:23-02-2019)  President of Pakistan (Dr. Arif Alvi) Visited Saylani Welfare International Trust HeadOffice Karachi. More Details    (News-6 Dated:19-02-2019)  Dr Jamil Ahmed (Additional Inspector General of Police) & Atiqmir Visit Saylani Welfare International Trust, Saylani Mass I.T. Training. More Details
        </p>
      </marquee>

      <div className="center green">
        <h1><span className="green">INTRO</span><span className="blue">DUCTION</span></h1>
        ______    <img src={Favicon} className="favicon" alt="" />    ______
      </div>

      <div className="paragraph">
        <p>Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a dignified life and spreading happiness.</p>
        <p>We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. With over 60 different sectors, we feed thousands of hungry people each day, hundreds more are given the hope of life through medical health care, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially.</p>
        <p>Today, we are proud to say that our physical presence extends throughout Pakistan with a vast network of 125 branches operating in major cities including Karachi, Lahore, Islamabad, Rawalpindi, Hyderabad and Faisalabad. Apart from Pakistan, we have overseas offices in the UK, USA and UAE as well. Our worldwide branches are operating under the guidance of a team of over 3,500 working professionals who help almost 150,000 people on a daily basis.
        </p>
        <p>We strongly believe that a little help goes a long way and our work would not be possible without the generous support of our valuable donors. Our local and international donors have graciously lent us a hand by supporting our causes and enabling us to serve the needs of people in need.
        </p>
      </div>

      <div className="saylaniWork">
        <div>
          <img className="Icon" src={Icon1} alt="" />
          <h1>150,000</h1>
          <p>DASTRAKHAN<span className="green bold">(MONTHLY)</span></p>
        </div>
        <div>
          <img className="Icon" src={Icon2} alt="" />
          <h1>8,500</h1>
          <p>ADOPTION<span className="green bold">(MONTHLY)</span></p>
        </div>
        <div>
          <img className="Icon" src={Icon3} alt="" />
          <h1>53,749</h1>
          <p>MEDICAL<span className="green bold">(MONTHLY)</span></p>
        </div>
        <div>
          <img className="Icon" src={Icon4} alt="" />
          <h1>180,000</h1>
          <p>EDUCATION<span className="green bold">(MONTHLY)</span></p>
        </div>

      </div>

      <div className="center green">
        <h1><span className="green">What We</span><span className="blue"> Are DOing?</span></h1>
        ______    <img src={Favicon} className="favicon" alt="" />    ______
      </div>

      <div className="wwad">
        <div className="card">
          <img src={Doing1} alt="" />
          <h2 className="blue">ONLINE SADQAH</h2>
        </div>
        <div className="card">
          <img src={Doing2} alt="" />
          <h2 className="blue">WELFARE</h2>
        </div>
        <div className="card">
          <img src={Doing3} alt="" />
          <h2 className="blue">MEDICAL</h2>
        </div>
        <div className="card">
          <img src={Doing4} alt="" />
          <h2 className="blue">DASTARKHWAN</h2>
        </div>
        <div className="card">
          <img src={Doing5} alt="" />
          <h2 className="blue">RO PLANT</h2>
        </div>
        <div className="card">
          <img src={Doing6} alt="" />
          <h2 className="blue">EDUCATION</h2>
        </div>
      </div>

      <div className="Mission-Upcoming">
        <div className="Mission">
          <h3 className="blue">MISSION AND UPCOMING PROJECTS</h3>

          <div>
            <img src={Mission1} alt="" />
            <h4 className="blue">Hepatitis</h4>
          </div>
          <div>
            <img src={Mission2} alt="" />
            <h4 className="blue">HOUSING SOCIETY</h4>
          </div>
          <div>
            <img src={Mission3} alt="" />
            <h4 className="blue">IT LITERACY</h4>
          </div>
          <div>
            <img src={Mission4} alt="" />
            <h4 className="blue">THARPARKAR</h4>
          </div>
        </div>
        <div className="Upcoming">
          <h3 className="blue">Upcoming Events</h3>
          <marquee direction="up" width="250" height="200" scrollamount="2">
            <p>
              Saylani Welfare Distributing Ration &amp;
              Clothes to affected people of Balochistan .
              <a className="blue">More Details</a> <br /><br />

              Entry Test Accouncement (Graphic Designing &amp; Video Editing/Animation Course) On Sunday 3rd March 2019 @ 11:00Am Vanue: 4rh Floor,Saylani Welfare International Trust HeadOffice Bahadurabad .<a className="blue">More Details</a> <br /><br />
              Dr Jamil Ahmed (Additional Inspector General of Police) &amp; Atiqmir Visit Saylani Welfare International Trust, Saylani Mass I.T. Training .<a className="blue">More Details</a>   <br /><br />
              PIAIC Entrance Exam Merit Ranking List Announced.<a className="blue">More Details</a>  <br /><br /> President of Pakistan (Dr. Arif Alvi) Visited Saylani Welfare International Trust HeadOffice Karachi. <a className="blue">More Details</a>
            </p>
          </marquee>

        </div>
      </div>

      <div className="center green">
        <h1><span className="green">IMAGE </span><span className="blue"> GALLERY</span></h1>
        ______    <img src={Favicon} className="favicon" alt="" />    ______
      </div>

      <div className="transimg">
        <div>
          <img src={Transimg5} alt="" />
        </div>
        <div>
          <img src={Transimg1} alt="" />
        </div>
        <div>
          <img src={Transimg2} alt="" />
        </div>
        <div>
          <img src={Transimg4} alt="" />
        </div>
        <div>
          <img src={Transimg3} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
