import { useContext } from "react";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import ProjectPage from "../components/ProjectPage/ProjectPage";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Work from "../components/Work/Work";
import ProjectPageContext from "../context/ProjectPageContext";
import WindowWidthContext from "../context/WindowWidthContext";

function MainPage() {
  const { windowWidth } = useContext(WindowWidthContext);
  const { openProjectPage, setOpenProjectPage, projectDetails } =
    useContext(ProjectPageContext);

  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Contact />
      <ProjectPage
        openProjectPage={openProjectPage}
        closeProjectPage={() => {
          setOpenProjectPage(false);
          document.body.classList.remove("overflowHidden");
        }}
        title={projectDetails.title}
        description={projectDetails.description}
        links={projectDetails.links}
        categories={projectDetails.categories}
      />
      {windowWidth > 768 ? <SocialLinks /> : null}
    </>
  );
}

export default MainPage;
