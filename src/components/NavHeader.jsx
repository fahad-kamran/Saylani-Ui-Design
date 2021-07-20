import Logo from '../assets/image/Saylani-logo.png';
import '../assets/css/NavHeader.css';
import { Link } from 'react-router-dom'
function NavHeader() {
  return (
    <div className="NavHeader">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className="logo" src={Logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/introduction">Introduction</Link></li>
                  <li><Link className="dropdown-item" to="/ChairmanMessage">Chaiman Message</Link></li>
                  <li><Link className="dropdown-item" to="/Saylani-Annual-Report">Saylani Annual Report</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Saylani Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/Education">Education</Link></li>
                  <li><Link className="dropdown-item" to="/Saylani-Blood-Bank-Thalessimia-Centre">Medical</Link></li>
                  <li><Link className="dropdown-item" to="/Family-Adoption">Family Adoption</Link></li>
                  <li><Link className="dropdown-item" to="/Hajj-Applicatio-Form">Hajj Application Form</Link></li>
                  <li><Link className="dropdown-item" to="/Saylani-Dastarkhwan">Saylani Dastarkhwan</Link></li>
                  <li><Link className="dropdown-item" to="/Saylani-RO-Plant">Saylani RO Plant</Link></li>
                  <li><Link className="dropdown-item" to="/Online-Sadqah">Online Sadqah</Link></li>
                  <li><Link className="dropdown-item" to="/Online-Taweezat-Istikhara">Online Taweezat/Istekhara</Link></li>
                  <li><Link className="dropdown-item" to="/Saylani-Job-Bank">Saylani Job Bank</Link></li>
                  <li><Link className="dropdown-item" to="/Online-Quran-Admission">Online Quran Admission</Link></li>
                  <li><Link className="dropdown-item" to="/Masajid-Online-Admission-Form">Saylani Online Masjid</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Saylani Ehsaad
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/Ehsaas-LangarKhana">Ehsaas Langarkhana</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Future Project
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/Saylani-University">Saylani University</Link></li>
                  <li><Link className="dropdown-item" to="/Saylani-City">Saylani City</Link></li>

                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavHeader;
