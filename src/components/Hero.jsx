import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Hero() {
  return (
    <>
      <div className="flex my-14 text-lg font-medium">
        <div className="flex flex-col w-1/2 gap-y-10">
          <div className="flex items-center gap-3">
            <div className="flex-grow border-t border-[#4731d3] dark:border-[#9e97c4]"></div>
            <span className="w-120 text-[#4731d3] dark:text-[#9e97c4]">
              Almila Su
            </span>
          </div>
          <span className="text-7xl font-bold dark:text-[#aebccf]">
            Creative thinker Minimalism lover
          </span>
          <span className="text-[#777777] dark:text-white">
            Hi, I'm Almila. I'm full-stack developer. If you are looking for
            Developer who to craft solid and scalable fronted products with
            great user experiences. Let's shake hands with me.
          </span>
          <div className="flex gap-2">
            <button className="bg-white hover:bg-[#4731d3] dark:bg-[#383838] text-[#4731d3] hover:text-white dark:text-[#aebccf] dark:hover:bg-[#aebccf] dark:hover:text-[#383838] py-4 px-8 border rounded-md shadow cursor-pointer">
              Hire me
            </button>
            <button className="bg-white hover:bg-[#4731d3] dark:bg-[#383838] text-[#4731d3] hover:text-white dark:text-[#aebccf] dark:hover:bg-[#aebccf] dark:hover:text-[#383838] py-4 px-8 border rounded-md shadow cursor-pointer">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </button>
            <button className="bg-white hover:bg-[#4731d3] dark:bg-[#383838] text-[#4731d3] hover:text-white dark:text-[#aebccf] dark:hover:bg-[#aebccf] dark:hover:text-[#383838] py-4 px-8 border rounded-md shadow cursor-pointer">
              <FontAwesomeIcon icon={faLinkedinIn} />
              Linkedin
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center ">
          <img
            src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
            className="rounded-2xl w-140 h-100 shadow-[9px_10px_31px_-4px_rgba(50,_50,_93,_0.25)]"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
