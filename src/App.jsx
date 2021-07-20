import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Introduction from './components/Introduction';
import ChairmanMessage from './components/ChairmanMessage';
import SaylaniAnnualReport from './components/Saylani-Annual-Report';
import Education from './components/Education';
import Medical from './components/Medical';
import FamilyAdoption from './components/Family-Adoption';
import HajjApplicatioForm from './components/Hajj-Applicatio-Form';
import SaylaniDastarkhwan from './components/Saylani-Dastarkhwan';
import SaylaniROPlant from './components/Saylani-RO-Plant';
import OnlineSadqah from './components/Online-Sadqah';
import OnlineTaweezatIstikhara from './components/Online-Taweezat-Istikhara';
import SaylaniJobBank from './components/Saylani-Job-Bank';
import OnlineQuranAdmission from './components/Online-Quran-Admission';
import MasajidOnlineAdmissionForm from './components/Masajid-Online-Admission-Form';
import EhsaasLangarKhana from './components/Ehsaas-LangarKhana';
import SaylaniUniversity from './components/Saylani-University';
import SaylaniCity from './components/Saylani-City';
export default function App() {
  return (
   

    <Router>
         
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Introduction">
            <Introduction />
          </Route>
          <Route path="/ChairmanMessage">
            <ChairmanMessage />
          </Route>
          <Route path="/Saylani-Annual-Report">
            <SaylaniAnnualReport />
          </Route>
          <Route path="/Education">
            <Education />
          </Route>
          <Route path="/Saylani-Blood-Bank-Thalessimia-Centre">
            <Medical />       
          </Route>
          <Route path="/Family-Adoption">
              <FamilyAdoption />
          </Route>
          <Route path="/Hajj-Applicatio-Form">
              <HajjApplicatioForm />
          </Route>
          <Route path="/Saylani-Dastarkhwan">
              <SaylaniDastarkhwan />
          </Route>
          <Route path="/Saylani-RO-Plant">
            <SaylaniROPlant />
          </Route>
<Route path="/Online-Sadqah">
  <OnlineSadqah />
</Route>
<Route path="/Online-Taweezat-Istikhara">
  <OnlineTaweezatIstikhara />
</Route>
<Route path="/Saylani-Job-Bank">
  <SaylaniJobBank />
</Route>
<Route path="/Online-Quran-Admission">
  <OnlineQuranAdmission />
</Route>
<Route path="/Masajid-Online-Admission-Form">
  <MasajidOnlineAdmissionForm />
</Route>
<Route path="/Ehsaas-LangarKhana">
  <EhsaasLangarKhana />
</Route>
<Route path="/Saylani-University">
  <SaylaniUniversity />
</Route>
<Route path="/Saylani-City">
  <SaylaniCity />
</Route>
    </Router>
  

 
  );
}
