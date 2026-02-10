import { useDispatch, useSelector } from "react-redux";
import {  fetchWeather, setCity } from "../store/actions/weatherActions";

const Search = () => {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();
  function handleInput(e) {
    dispatch(setCity(e.target.value));
  }
  console.log(city);

  function handleSearchBtn() {
    dispatch(fetchWeather(city));
  }
  return (
    <div >
      <div className="flex gap-5">
        <input
          type="search"
          value={city}
          className="bg-[#5a5757] px-4 py-2 rounded-md text-2xl"
          placeholder="search city"
          onChange={handleInput}
        />
        <button
          className="text-2xl bg-amber-900 px-4 py-2 rounded-md"
          onClick={handleSearchBtn}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
