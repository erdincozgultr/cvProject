import { useSelector } from "react-redux";

export function useData(sectionName) {
  const language = useSelector((state) => state.language);
  const data = useSelector((state) => state.data);
  return data[language][sectionName];
}