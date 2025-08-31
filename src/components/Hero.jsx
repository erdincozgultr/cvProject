import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

function Hero() {
  const language = useSelector((state) => state.language);
  const data = useSelector((state) => state.data);
  const heroData = data[language].heroSection;

  return (
    <>
      <div className="flex my-14 text-lg font-medium">
        <div className="flex flex-col w-1/2 gap-y-10">
          <div className="flex items-center gap-3">
            <div className="flex-grow border-t border-[#4731d3] dark:border-[#9e97c4]"></div>
            <span className="w-120 text-[#4731d3] dark:text-[#9e97c4]">
              {heroData.name}
            </span>
          </div>
          <span className="text-7xl font-bold dark:text-[#aebccf]">
            {heroData.greeting}
          </span>
          <span className="text-[#777777] dark:text-white">
            {heroData.intro}
          </span>
          <div className="flex gap-2">
            {heroData.socials.map((social, index) => {
              let iconComponent;
              if (social.faIcon === "faGithub") {
                iconComponent = faGithub;
              } else if (social.faIcon === "faLinkedinIn") {
                iconComponent = faLinkedinIn;
              }
              return (
                <button
                  key={index}
                  className="bg-white hover:bg-[#4731d3] dark:bg-[#383838] text-[#4731d3] hover:text-white dark:text-[#aebccf] dark:hover:bg-[#aebccf] dark:hover:text-[#383838] py-4 px-8 border rounded-md shadow cursor-pointer"
                >
                  {social.faIcon && <FontAwesomeIcon icon={iconComponent} />}
                  <span>{social.text}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center ">
          <img
            src={heroData.profileImage}
            className="rounded-2xl w-140 h-100 shadow-[9px_10px_31px_-4px_rgba(50,_50,_93,_0.25)]"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
