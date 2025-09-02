import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import { setData } from "./store/actions";
import userData from "./data";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", userData, {
        headers: { "x-api-key": "reqres-free-v1" },
      })
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => console.log(error.message));
  }, [dispatch]);
  const darkmode = useSelector(state => state.darkMode)
  const language = useSelector((state) => state.language);
  const data = useSelector(state => state.data);
    if (!data || !data[language]) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div data-theme={darkmode ? "dark" : ""} className="bg-white dark:bg-[#252128]">
        <div className="w-4/5 sm:w-6/7 xl:w-4/6 mx-auto flex flex-col gap-y-8 pt-10 pb-[160px]">
          <Header />
          <Hero />
          <Skills />
          <div className="flex-grow border-1 border-[#dcd8f3] dark:border-[#9e97c4]"></div>
          <Profile />
          <div className="flex-grow border-1 border-[#dcd8f3] dark:border-[#9e97c4]"></div>
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

//data-theme="dark"
