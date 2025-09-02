import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Footer() {
  const language = useSelector((state) => state.language);
  const data = useSelector((state) => state.data);
  const footerData = data[language].footerSection;

  return (
    <>
      <div className="bg-[#f9f9f9] dark:bg-[#141414]">
        <div className="w-4/6 mx-auto flex flex-col gap-y-12 py-30">
          <span className="text-5xl font-medium sm:w-130 dark:text-[#aebccf]">
            {footerData.intro}
          </span>
          <div className="flex justify-between text-xl flex flex-col sm:flex-row gap-y-10">
            <span className="text-[#ffd55c] ">
              <FontAwesomeIcon icon={faHandPointRight} />
              <span className="text-[#b31a53] hover:text-[#4731d3] dark:text-[#aebccf] dark:hover:text-[#9e97c4] underline decoration-1 cursor-pointer">
                {footerData.mail}
              </span>
            </span>
            <div className="flex gap-4">
              <span className="dark:text-[#aebccf] cursor-pointer">
                {footerData.buttons[0]}
              </span>
              <span className="text-[#1fb57d] cursor-pointer">{footerData.buttons[1]}</span>
              <span className="text-[#1f87bd] cursor-pointer">{footerData.buttons[2]}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
