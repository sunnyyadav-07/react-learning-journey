import { createContext, useContext } from "react";

const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  return <NewsContext.Provider>{children}</NewsContext.Provider>;
};
const useNewsContext = () => {
  return useContext(NewsContext);
};
export { useNewsContext, NewsContextProvider };
