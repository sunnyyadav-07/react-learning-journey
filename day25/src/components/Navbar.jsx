import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <div className="bg-base-300  z-20">
      <Wrapper>
        <div className="navbar  shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">News App</a>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
