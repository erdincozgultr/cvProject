import { useDispatch, useSelector } from "react-redux";
import { setDarkmode, setLanguage } from "../store/actions";

function Header() {
  const language = useSelector((state) => state.language);
  const darkmode = useSelector((state) => state.darkMode);
  const data = useSelector((state) => state.data);
  const headerData = data[language].headerSection;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-y-5 text-lg font-medium">
        <div className="flex gap-x-6 flex justify-end item-center">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => dispatch(setDarkmode(!darkmode))}
            />
            <div className="relative w-14 h-6 bg-[#3a3a3a] peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#3a3a3a] peer-checked:after:translate-x-[32px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#ffe86e] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#4731d3] dark:peer-checked:bg-[#4731d3]"></div>
            <span className="ms-3 text-[#777777] dark:text-[#c3c2c3]">
              {darkmode ? headerData.darkmode[1] : headerData.darkmode[0]}
            </span>
          </label>
          <span>|</span>
          {language === "tr" ? (
            <span
              className="text-[#777777]"
              onClick={() =>
                dispatch(setLanguage(language === "tr" ? "en" : "tr"))
              }
            >
              {headerData.switch[1]}
              <span className="text-[#4731d3] dark:text-[#9e97c4] hover:text-[#b31a53] dark:hover:text-[#aebccf] cursor-pointer">
                {headerData.switch[0]}
              </span>
            </span>
          ) : (
            <span
              className="text-[#4731d3] dark:text-[#9e97c4] hover:text-[#b31a53] dark:hover:text-[#aebccf] cursor-pointer"
              onClick={() =>
                dispatch(setLanguage(language === "tr" ? "en" : "tr"))
              }
            >
              {headerData.switch[0]}
              <span className="text-[#777777]">{headerData.switch[1]}</span>
            </span>
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <button className="rotate-45 bg-[#eeebff] dark:bg-[#4731d3] rounded-full w-16 h-16 text-[#4731d3] dark:text-[#9e97c4]">
              <span className="text-2xl">A</span>
            </button>
          </div>
          <div className="flex gap-x-16 text-[#777777] items-center">
            {headerData.buttons.map((button, index) => (
              <a href={`#${button}`} key={index}>
                <button className="hover:text-[#141414] dark:hover:text-[#c3c2c3] cursor-pointer">
                  {button}
                </button>
              </a>
            ))}
            <button className="bg-white hover:bg-[#4731d3] dark:bg-[#383838] text-[#4731d3] hover:text-white dark:text-[#aebccf] dark:hover:bg-[#aebccf] dark:hover:text-[#383838] py-4 px-8 border rounded-md shadow cursor-pointer">
              {headerData.hireMe}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
