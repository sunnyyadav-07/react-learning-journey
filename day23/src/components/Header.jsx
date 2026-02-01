import { useCounterContaxt } from "../CounterContext";

const Header = () => {
  const { count } = useCounterContaxt();
  return (
    <div>
      <h1>This is header component : {count} </h1>
    </div>
  );
};

export default Header;
