function Header() {
  return (
    <>
      <div className="flex flex-col gap-y-5 text-lg font-medium">
        <div className="flex gap-x-6 flex justify-end item-center">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-14 h-6 bg-[#3a3a3a] peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#3a3a3a] peer-checked:after:translate-x-[32px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#ffe86e] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#4731d3] dark:peer-checked:bg-[#4731d3]"></div>
            <span className="ms-3 text-[#777777] dark:text-[#c3c2c3]">
              DARK MODE
            </span>
          </label>
          <span>|</span>
          <span className="text-[#4731d3] dark:text-[#9e97c4] hover:text-[#b31a53] dark:hover:text-[#aebccf] cursor-pointer">
            TÜRKÇE<span className="text-[#777777]">'YE GEÇ</span>
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <button className="rotate-45 bg-[#eeebff] dark:bg-[#4731d3] rounded-full w-16 h-16 text-[#4731d3] dark:text-[#9e97c4]">
              <span className="text-2xl">A</span>
            </button>
          </div>
          <div className="flex gap-x-16 text-[#777777]">
            <button className="hover:text-[#141414] dark:hover:text-[#c3c2c3] cursor-pointer">Skills</button>
            <button className="hover:text-[#141414] dark:hover:text-[#c3c2c3] cursor-pointer">Projects</button>
            <button className="cursor-pointer border border-solid px-8 py-4 rounded-md text-[#4731d3] dark:bg-white hover:bg-[#4731d3] hover:text-white dark:hover:bg-[#aebccf] dark:hover:text-[#383838]">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
