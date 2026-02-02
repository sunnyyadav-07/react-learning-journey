import React from "react";
import useGlobalStore from "../store/useGlobalStore";

const Header = () => {
  const count = useGlobalStore((state) => state.count);
  const theme = useGlobalStore((state) => state.theme);
  const toggleTheme = useGlobalStore((state) => state.toggleTheme);
  return (
    <div>
      <nav className="flex items-center fixed w-full  px-5 py-2 text-2xl gap-15  bg-(--nav-bg) text-(--text)">
        <p className="font-medium">current count : {count}</p>
        <p className="font-medium">current theme : {theme}</p>
        <div>
          <button
            className=" bg-(--button-bg) text-(--button-text) cursor-pointer px-3 py-2 rounded-md active:scale-95"
            onClick={toggleTheme}
          >
            Toggle theme
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
