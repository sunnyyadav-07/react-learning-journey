import { useSelector } from 'react-redux';

const ForcastWeather = () => {
    const forcast = useSelector((state) => state.forcast);
   if(!forcast) return null
  return (
    <div className="bg-[#494747] text-2xl px-16 py-8 space-y-1.5">
      <h2 className="text-4xl">4 day forcast</h2>
      {forcast.map((item, index) => (
        <p key={index}>
          {item.dt_txt}-{(item?.main.temp - 273).toFixed(1)}°C
        </p>
      ))}
    </div>
  );
}

export default ForcastWeather