import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useData } from "../hooks/useData";

function Hero() {
  const heroData = useData("heroSection");

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:my-14 xl:text-lg sm:justify-between font-medium ">
        <div className="flex flex-col w-1/1 sm:w-1/2 gap-y-10 order-2 sm:order-1 sm:mr-5">
          <div className="flex items-center gap-3 invisible sm:visible">
            <div className="flex-grow border-t border-purpleHearth dark:border-blueBell"></div>
            <span className="w-120 text-purpleHearth dark:text-blueBell">
              {heroData.name}
            </span>
          </div>
          <span className="text-5xl sm:text-6xl xl:text-7xl  font-bold dark:text-casper">
            {heroData.greeting}
          </span>
          <span className="text-boulder dark:text-white">
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
                  className="bg-white hover:bg-purpleHearth dark:bg-mineShaft text-purpleHearth hover:text-white dark:text-casper dark:hover:bg-casper dark:hover:text-mineShaft py-4 px-8 border rounded-md shadow cursor-pointer"
                >
                  {social.faIcon && <FontAwesomeIcon icon={iconComponent} />}
                  <span>{social.text}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-1/1 sm:w-1/2 flex justify-end items-center order-1 sm:order-2">
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
