import { useSelector } from "react-redux";

function Skills() {
  const language = useSelector((state) => state.language);
  const data = useSelector((state) => state.data);
  const skillsData = data[language].skillsSection;

  return (
    <>
      <div className="flex flex-col gap-y-10">
        <div className="text-5xl font-medium dark:text-[#aebccf]">
          {skillsData.title}
        </div>
        <div className="flex justify-between text-sm text-[#777777]">
          {skillsData.skills.map((skill, index) => (
            <div key={index} className="w-80 flex flex-col gap-y-6">
              <span className="text-4xl text-[#4731d3] dark:text-[#9e97c4]">
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
