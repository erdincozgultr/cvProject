import { useSelector } from "react-redux";

function Projects() {
  const language = useSelector((state) => state.language);
  const data = useSelector((state) => state.data);
  const projectsData = data[language].projectsSection;

  return (
    <>
      <div className="flex flex-col gap-y-10">
        <div className="text-5xl font-medium dark:text-[#aebccf]">
          {projectsData.title}
        </div>
        <div className="flex gap-[100px]">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-y-4 text-[#777777]">
              <img src={project.img} />
              <span className="text-4xl text-[#4731d3] hover:text-[#b31a53] dark:text-[#9e97c4] dark:hover:text-[#aebccf] cursor-pointer">
                {project.project}
              </span>
              <span className="dark:text-white">{project.text}</span>
              <div className="flex gap-1">
                {project.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="font-medium bg-white hover:bg-[#4731d3] dark:bg-[#383838] text-[#4731d3] hover:text-white dark:text-[#9e97c4] dark:hover:bg-[#aebccf] dark:hover:text-[#383838] px-5 border dark:border-[#9e97c4] rounded-md shadow cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex justify-between underline decoration-1 text-[#4731d3] dark:text-[#aebccf] font-medium">
                {project.folders.map((folder, index) => (
                  <span
                    key={index}
                    className="hover:text-[#b31a53] dark:hover:text-[#9e97c4] cursor-pointer"
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
