import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function Hero() {
  return (
    <>
      <div className="flex my-14 text-lg font-medium">
        <div className="flex flex-col w-1/2 gap-y-10">
          <div className="flex items-center gap-3">
            <div className="flex-grow border-t border-[#4731d3]"></div>
            <span className="w-130 text-[#4731d3]">Almila Su</span>
          </div>
          <span className="text-7xl font-bold">
            Creative thinker Minimalism lover
          </span>
          <span className="text-[#777777]">
            Hi, I'm Almila. I'm full-stack developer. If you are looking for
            Developer who to craft solid and scalable fronted products with
            great user experiences. Let's shake hands with me.
          </span>
          <div className="flex gap-2">
            <button className="bg-[#4731d3] text-white py-4 px-8 border rounded-md shadow">Hire me</button>
            <button className="bg-white text-[#4731d3] py-4 px-8 border rounded-md shadow">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </button>
            <button className="bg-white text-[#4731d3] py-4 px-8 border rounded-md shadow"><FontAwesomeIcon icon={faLinkedinIn} />Linkedin</button>
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