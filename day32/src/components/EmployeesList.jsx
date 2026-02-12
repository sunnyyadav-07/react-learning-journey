import Wrapper from "./Wrapper";

import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../store/feature/popup/popup.slice";
import { updateEmployee } from "../store/feature/employees/employee.thunk";
import Loader from "./Loader";
const EmployeesList = () => {
  const isHighligt = useSelector(
    (state) => state.employeeDetails.isShowHighligtEmployee,
  );
  const employees = useSelector((state) => state.employeeDetails.employees);
  const loading = useSelector((state) => state.employeeDetails.loading);
  const visibleEmployee = isHighligt
    ? employees.filter((employee) => employee.highlight)
    : employees;

  if (loading) return <Loader />;
  return (
    <Wrapper>
      {visibleEmployee.length === 0 && (
        <p className="text-center mt-90 text-2xl text-red-400">
          employees not found!
        </p>
      )}
      <ul className="list bg-base-100 rounded-box shadow-md py-10">
        {visibleEmployee.map((employee) => (
          <EmployeeCard employee={employee} key={employee?.id} />
        ))}
      </ul>
    </Wrapper>
  );
};
const EmployeeCard = ({ employee }) => {
  const dispatch = useDispatch();
  function handleHighligt(details) {
    dispatch(
      updateEmployee({
        id: details.id,
        details: { ...details, highlight: !details.highlight },
      }),
    );
  }

  return (
    <>
      <li className="list-row">
        <div>
          <img className="size-10 rounded-box" src={employee?.profileUrl} />
        </div>
        <div>
          <div>{employee?.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {employee?.email}
          </div>
        </div>
        <p className="list-col-wrap text-xs">{employee?.bio}</p>
        <button
          className="btn btn-square btn-ghost"
          onClick={() => {
            dispatch(openEmployeePopup(employee));
          }}
        >
          <MdEdit className="text-xl" />
        </button>
        <button
          className="btn btn-square btn-ghost"
          onClick={() => {
            dispatch(openDeletePopup(employee.id));
          }}
        >
          <MdDeleteOutline className="text-xl" />
        </button>
        <button
          className="btn btn-square btn-ghost"
          onClick={() => handleHighligt(employee)}
        >
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill={employee.highlight ? "currentColor" : "none"}
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button>
      </li>
    </>
  );
};
export default EmployeesList;
