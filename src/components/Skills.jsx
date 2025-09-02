import { useSelector } from "react-redux";

function Skills() {
  const language = useSelector((state) => state.language);
  const data = useSelector((state) => state.data);
  const skillsData = data[language].skillsSection;

  return (
    <>
      <div className="flex flex-col gap-y-10"><a id={skillsData.title}/>
        <div className="text-4xl sm:text-5xl font-medium dark:text-[#aebccf]">
          {skillsData.title}
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-sm text-[#777777]">
          {skillsData.skills.map((skill, index) => (
            <div key={index} className="sm:w-80 flex flex-col gap-y-6 pb-6 sm:pr-5 xl:pr-0">
              <span className="text-2xl sm:text-4xl text-[#4731d3] dark:text-[#9e97c4]">
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
