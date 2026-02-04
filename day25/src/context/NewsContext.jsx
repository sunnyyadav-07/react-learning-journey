import { createContext, useContext, useState } from "react";
import api from "../config/axiosInstance";

const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchNews(url = "/everything?q=india") {
    try {
      setLoading(true);
      let res = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`);
      setLoading(false);
      setNews(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
const useNewsContext = () => {
  return useContext(NewsContext);
};
export { useNewsContext, NewsContextProvider };
