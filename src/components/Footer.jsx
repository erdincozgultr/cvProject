import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../hooks/useData";

function Footer() {
  const footerData = useData("footerSection");

  return (
    <>
      <div className="bg-alabaster dark:bg-codGray">
        <div className="w-4/6 mx-auto flex flex-col gap-y-12 py-30">
          <span className="text-5xl font-medium sm:w-130 dark:text-casper">
            {footerData.intro}
          </span>
          <div className="flex justify-between text-xl flex flex-col sm:flex-row gap-y-10">
            <span className="text-dandelion">
              <FontAwesomeIcon icon={faHandPointRight} />
              <span className="text-maroonFlush hover:text-purpleHearth dark:text-casper dark:hover:text-blueBell underline decoration-1 cursor-pointer">
                {footerData.mail}
              </span>
            </span>
            <div className="flex gap-4">
              <span className="dark:text-casper cursor-pointer">
                {footerData.buttons[0]}
              </span>
              <span className="text-mountainMeadow cursor-pointer">{footerData.buttons[1]}</span>
              <span className="text-easternBlue cursor-pointer">{footerData.buttons[2]}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
