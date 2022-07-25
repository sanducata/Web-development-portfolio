import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <Home />
      <Work />
      <Contact />
    </>
  );
}

export default App;
