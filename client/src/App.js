import React, { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Main from "./components/Main/Main";
import About from "./components/Pages/About/About";
import Work from "./components/Pages/Work/Work";
import OurProject from "./components/OurProject/OurProject";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<OurProject />} />
      </Routes>
      <Footer />
    </>
  );
}
