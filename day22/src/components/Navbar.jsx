import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-md  
     ${isActive ? "bg-[tomato] text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`;

  return (
    <nav className="fixed w-full bg-pink-700 text-white px-6 py-2 flex gap-15 items-center">
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
          alt=""
          className="w-15 bg-transparent"
        />
      </div>
      <div className="flex gap-2 items-center">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/products" className={linkStyle}>
          Products
        </NavLink>
      </div>
    </nav>
  );
}
