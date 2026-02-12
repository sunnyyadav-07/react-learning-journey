import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import { FaPlus } from "react-icons/fa";
import { openEmployeePopup } from "../store/feature/popup/popup.slice";
import { highligt } from "../store/feature/employees/employee.slice";
const Navbar = () => {
  const dispatch = useDispatch();
  const isHighligt = useSelector(
    (state) => state.employeeDetails.isShowHighligtEmployee,
  );
  function handlePopup() {
    dispatch(openEmployeePopup());
  }
  function showHighligtEmployee() {
    dispatch(highligt());
  }
  return (
    <div className="bg-base-300 sticky top-0 z-10">
      <Wrapper>
        <div className="navbar  ">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Employees</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle" onClick={handlePopup}>
              <FaPlus className="text-xl" />
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={showHighligtEmployee}
            >
              <div className="indicator">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill={isHighligt ? "currentColor" : "none"}
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
