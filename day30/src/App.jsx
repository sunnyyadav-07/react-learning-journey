import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import {  fetchWeather } from "./store/actions/weatherActions";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import ForcastWeather from "./components/ForcastWeather";

function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);
  return (
    <div className="flex justify-center flex-col space-y-2.5 items-center min-h-screen bg-[#152e50] py-10">
      <Search />
      <CurrentWeather />
      <ForcastWeather />
    </div>
  );
}

export default App;
