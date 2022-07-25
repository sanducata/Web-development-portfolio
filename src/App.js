import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SocialLinks />
      <Home />
      <Work />
      <Contact />
    </>
  );
}

export default App;
