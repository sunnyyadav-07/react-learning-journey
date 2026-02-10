import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const current = useSelector((state) => state.current);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  console.log(current, loading);
  if (loading) return <p className="text-3xl text-amber-200">Loading.......</p>;
  if(error) return <p>{error}</p>
  if(!current) return null
  return (
    <div className="bg-[#494747] text-2xl px-16 py-8 space-y-1.5">
      <p className="text-4xl">{current?.name}</p>
      <p>Temprature : {(current?.main.temp - 273).toFixed(1)}°C</p>
      <p>Humidity : {current?.main.humidity}</p>
      <p>Weather : {current?.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
