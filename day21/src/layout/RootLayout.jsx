import { Outlet, NavLink, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="h-screen bg-[black]">
      <nav className="flex gap-10 font-bold py-2 px-4 bg-amber-400 text-black text-3xl">
        <Link to={"/"} >Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
