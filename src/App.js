import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./components/contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Router>
        <Navbar isScrolling={scrollHeight} />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/about" element={<About />} />
            <Route path="/proyects" element={<Slider />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </AnimatePresence>
        <Contact />
        <Info />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import About from "./components/about/About";
// import Cover from "./components/cover/Cover";
// import Navbar from "./components/navbar/Navbar";
// import Slider from "./components/slider/Slider";
// import Info from "./components/info/Info";
// import Skills from "./components/skills/Skills";
// import Footer from "./components/footer/Footer";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Contact from "./components/contact/Contact";

// function App() {
//   const [scrollHeight, setScrollHeight] = useState(0);

//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollHeight(position);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, [scrollHeight]);

//   return (
//     <div className="App">
//       <Router>
//         <Navbar isScrolling={scrollHeight} />
//         <Routes>
//           <Route path="/" element={<Cover />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/proyects" element={<Slider />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="*" element={<Navigate replace to="/" />} />
//         </Routes>
//         <Contact />
//         <Info />
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
