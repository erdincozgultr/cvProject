export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_DARKMODE = "SET_DARKMODE";
export const SET_DATA = "SET_DATA";

export const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  return { type: SET_LANGUAGE, payload: lang };
};

export const setDarkmode = (darkmode) => {
  localStorage.setItem("darkmode", darkmode);
  return { type: SET_DARKMODE, payload: darkmode };
};

export const setData = (data) => {
  return { type: SET_DATA, payload: data };
};
