import React from "react";
import CoreFeature from "../CoreFeature/CoreFeature";
import Footer from "../Footer/Footer";
import HappyClient from "../HappyClient/HappyClient";
import Header from "../Header/Header";
import HeaderNav from "../HeaderNav/HeaderNav";
import OurProject from "../OurProject/OurProject";
import Services from "../Services/Services";
import Started from "../Started/Started";

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderNav />
      <CoreFeature />
      <Services />
      <OurProject />
      <HappyClient/>
      <Started />
      <Footer />
    </div>
  );
}
