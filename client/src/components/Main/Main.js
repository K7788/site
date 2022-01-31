import React from "react";
import HappyClient from "../HappyClient/HappyClient";
import OurProject from "../OurProject/OurProject";
import Services from "../Services/Services";
import Started from "../Started/Started";

export default function Main() {
  return (
    <div>
      <HappyClient />
      <OurProject />
      <Services />
      <Started />
    </div>
  );
}
