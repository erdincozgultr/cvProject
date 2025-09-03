import { useDispatch, useSelector } from "react-redux";
import { setDarkmode, setLanguage } from "../store/actions";
import { useData } from "../hooks/useData";

function Header() {
  const language = useSelector((state) => state.language);
  const darkmode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const headerData = useData("headerSection");

  return (
    <>
      <div className="flex flex-col gap-y-5 sm:text-lg font-medium">
        <div className="flex gap-x-6 flex justify-end item-center">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => dispatch(setDarkmode(!darkmode))}
            />
            <div className="relative w-14 h-6 bg-mineShaft peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-mineShaft peer-checked:after:translate-x-[32px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-dandelion after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purpleHearth dark:peer-checked:bg-purpleHearth"></div>
            <span className="ms-3 text-boulder dark:text-paleSlate">
              {darkmode ? headerData.darkmode[1] : headerData.darkmode[0]}
            </span>
          </label>
          <span>|</span>
          {language === "tr" ? (
            <span
              className="text-boulder"
              onClick={() =>
                dispatch(setLanguage(language === "tr" ? "en" : "tr"))
              }
            >
              {headerData.switch[1]}
              <span className="text-purpleHearth dark:text-blueBell hover:text-maroonFlush dark:hover:text-casper cursor-pointer">
                {headerData.switch[0]}
              </span>
            </span>
          ) : (
            <span
              className="text-purpleHearth dark:text-blueBell hover:text-maroonFlush dark:hover:text-casper cursor-pointer"
              onClick={() =>
                dispatch(setLanguage(language === "tr" ? "en" : "tr"))
              }
            >
              {headerData.switch[0]}
              <span className="text-boulder">{headerData.switch[1]}</span>
            </span>
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <button className="rotate-45 bg-titanWhite dark:bg-purpleHearth rounded-full w-16 h-16 text-purpleHearth dark:text-blueBell">
              <span className="text-2xl">A</span>
            </button>
          </div>
          <div className="flex gap-x-6 sm:gap-x-16 text-boulder items-center">
            {headerData.buttons.map((button, index) => (
              <a href={`#${button}`} key={index}>
                <button className="hover:text-codGray dark:hover:text-paleSlate cursor-pointer">
                  {button}
                </button>
              </a>
            ))}
            <button className="bg-white hover:bg-purpleHearth dark:bg-mineShaft text-purpleHearth hover:text-white dark:text-casper dark:hover:bg-casper dark:hover:text-mineShaft py-4 px-8 border rounded-md shadow cursor-pointer">
              {headerData.hireMe}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
