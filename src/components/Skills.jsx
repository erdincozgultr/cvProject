import { useData } from "../hooks/useData";

function Skills() {
  const skillsData = useData("skillsSection");

  return (
    <>
      <div className="flex flex-col gap-y-10"><a id={skillsData.title}/>
        <div className="text-4xl sm:text-5xl font-medium dark:text-casper">
          {skillsData.title}
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-sm text-boulder">
          {skillsData.skills.map((skill, index) => (
            <div key={index} className="sm:w-80 flex flex-col gap-y-6 pb-6 sm:pr-5 xl:pr-0">
              <span className="text-2xl sm:text-4xl text-purpleHearth dark:text-blueBell">
                {skill.name}
              </span>
              <span className="dark:text-white">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
