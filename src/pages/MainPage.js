import { useContext } from "react";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Work from "../components/Work/Work";
import WindowWidthContext from "../context/WindowWidthContext";

function MainPage() {
  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Contact /> {windowWidth > 768 ? <SocialLinks /> : null}
    </>
  );
}

export default MainPage;
