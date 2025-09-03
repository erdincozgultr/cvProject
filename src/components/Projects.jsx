import { useData } from "../hooks/useData";

function Projects() {
  const projectsData = useData("projectsSection");

  return (
    <>
      <div className="flex flex-col gap-y-10"><a id={projectsData.title}/>
        <div className="text-3xl sm:text-5xl font-medium dark:text-casper">
          {projectsData.title}
        </div>
        <div className="flex flex-col sm:flex-row gap-[100px]">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-y-4 text-boulder sm:w-1/4 xl:w-md">
              <img src={project.img} className="w-md"/>
              <span className="text-2xl sm:text-4xl text-purpleHearth hover:text-maroonFlush dark:text-blueBell dark:hover:text-casper cursor-pointer">
                {project.project}
              </span>
              <span className="dark:text-white">{project.text}</span>
              <div className="flex sm:flex-wrap xl:flex-nowrap gap-1">
                {project.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="font-medium bg-white hover:bg-purpleHearth dark:bg-mineShaft text-purpleHearth hover:text-white dark:text-blueBell dark:hover:bg-casper dark:hover:text-mineShaft px-5 border dark:border-blueBell rounded-md shadow cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex justify-between underline decoration-1 text-purpleHearth dark:text-casper font-medium">
                {project.folders.map((folder, index) => (
                  <span
                    key={index}
                    className="hover:text-maroonFlush dark:hover:text-blueBell cursor-pointer"
                  >
                    {folder}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
