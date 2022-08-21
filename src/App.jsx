// import { Navigation } from "./components/navigation";
import "./App.css";
// import Home from "./components/Home";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import { User } from "./components/User";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import { WorkingExperience } from "./components/WorkingExperience";
import { Education } from "./components/Education";
import { Divider } from "./components/Divider";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Divider />
      <Education data={landingPageData.Services} />
      <Divider />
      {/* <Services data={landingPageData.Services} /> */}
      <WorkingExperience />
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
