import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
// import News from "./Components/News";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    ReactGA.initialize("G-ZP293L5ZQM");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Fetch resume data
    fetch("/resumeData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        return response.json();
      })
      .then((data) => {
        setResumeData(data);
      })
      .catch((error) => {
        console.error("Error loading resume data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      {/* <News data={resumeData.news} /> */}
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      {/* <Testimonials data={resumeData.testimonials} /> */}
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
