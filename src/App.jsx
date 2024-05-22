import { useState } from "react";
/*import Navbar from "./components/test/Navbar";
import AboutUs from "./components/test/AboutUs";
import ContactUs from "./components/test/ContactUs";*/
import NavListMenu from "./components/NavListMenu";
import LogoHead from "./components/LogoHead";
import GalleryWithTab from "./components/GalleryWithTab";
import SpeedDialWithTextOutside from "./components/SpeedDialWithTextOutside";
import Background from "./components/Background";
import FooterWithLogo from "./components/FooterWithLogo";
import AboutUs from "./components/AboutUs";
import { CustomerReacts } from "./components/CustomerReacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/*<Navbar />
      <AboutUs />
  <ContactUs />*/}
      <NavListMenu />
      <LogoHead />
      <GalleryWithTab />
      <SpeedDialWithTextOutside />
      <CustomerReacts />
      <AboutUs />
      <FooterWithLogo />
      {/*<Background /> */}
    </div>
  );
}

export default App;
