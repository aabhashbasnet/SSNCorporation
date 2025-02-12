import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import FloatingChatButton from "./components/FloatingChatButton/FloatingChatButton";
import Working from "./components/Working/Working";
import Footer from "./components/Footer/Footer";
import OurMission from "./pages/OurMission/OurMission";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Industries from "./pages/Industries/Industries";
import Landscaping from "./pages/Industries/Landscaping";
import Paving from "./pages/Industries/Paving";
import GeneralConstruction from "./pages/Industries/GeneralConstruction";
import FacilitiesMaintainance from "./pages/Industries/FacilitiesMaintenance";
import WhoWeServe from "./pages/WhoWeServe/WhoWeServe";
import Contractors from "./pages/WhoWeServe/Contractors";
import Suppliers from "./pages/WhoWeServe/Suppliers";
import SubContractors from "./pages/WhoWeServe/SubContractors";
// import GetStarted from "./pages/GetStarted/GetStarted";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container" >
        <Header />
        <FloatingChatButton />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Working />
                <Footer />
              </>
            }
          />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/loginSignUp" element={<LoginSignUp />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/landscaping" element={<Landscaping />} />
          <Route path="/industries/paving" element={<Paving />} />
          <Route
            path="/industries/general-construction"
            element={<GeneralConstruction />}
          />
          <Route
            path="/industries/facilities-maintenance"
            element={<FacilitiesMaintainance />}
          />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/who-we-serve/contractors" element={<Contractors />} />
          <Route path="/who-we-serve/suppliers" element={<Suppliers />} />
          <Route path="/who-we-serve/sub-contractors" element={<SubContractors />} />
          {/* <Route path="/get-started" element={<GetStarted />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
