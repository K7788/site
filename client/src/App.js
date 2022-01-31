import React from "react";
import CoreFeature from "./components/CoreFeature/CoreFeature";
import Footer from "./components/Footer/Footer";
import HappyClient from "./components/HappyClient/HappyClient";
import Header from "./components/Header/Header";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import OurProject from "./components/OurProject/OurProject";
import Services from "./components/Services/Services";
import Started from "./components/Started/Started";

export default function App() {
  return (
    <div>
      <Header />
      <HeaderNav />
      <CoreFeature />
      <Services />
      <OurProject />
      <HappyClient />
      <Started />
      <Footer />
    </div>
  );
}
