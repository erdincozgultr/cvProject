import { SET_DARKMODE, SET_LANGUAGE, SET_DATA} from "../actions";

const initialLanguage = localStorage.getItem("lang") || "en";
const initialDarkMode = localStorage.getItem("darkmode") === "true";


const initialState = {
  language: initialLanguage,
  darkMode: initialDarkMode,
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    case "SET_DARKMODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
