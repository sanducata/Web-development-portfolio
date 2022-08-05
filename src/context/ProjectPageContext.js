import React, { createContext, useState } from "react";

const ProjectPageContext = createContext();

function ProjectPageContextProvider(props) {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    extendedDescription: "",
    image: "",
    links: "",
    categories: "",
  });
  const [openProjectPage, setOpenProjectPage] = useState(false);

  return (
    <ProjectPageContext.Provider
      value={{
        projectDetails,
        setProjectDetails,
        openProjectPage,
        setOpenProjectPage,
      }}
    >
      {props.children}
    </ProjectPageContext.Provider>
  );
}

export default ProjectPageContext;
export { ProjectPageContextProvider };
