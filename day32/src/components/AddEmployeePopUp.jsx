import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../store/feature/popup/popup.slice";
import { useEffect, useState } from "react";
import {
  postEmployee,
  updateEmployee,
} from "../store/feature/employees/employee.thunk";

const AddEmployeePopUp = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    bio: "",
    profileUrl: "",
    highlight: false,
  });
  function handleInputChane(e) {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  }
  const employeePopup = useSelector((state) => state.popup.employeePopup);
  const dispatch = useDispatch();
  function closePopup() {
    dispatch(closeEmployeePopup());
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (employeePopup.id) {
      await dispatch(
        updateEmployee({ id: employeePopup.id, details: formDetails }),
      );
    } else {
      await dispatch(postEmployee(formDetails));
    }
    dispatch(closeEmployeePopup());
  }

  useEffect(() => {
    if (!employeePopup.id) {
      setFormDetails({
        name: "",
        email: "",
        bio: "",
        profileUrl: "",
        highlight: false,
      });
    } else if (employeePopup.id) {
      setFormDetails({
        name: employeePopup.name,
        email: employeePopup.email,
        bio: employeePopup.bio,
        profileUrl: employeePopup.profileUrl,
        highlight: false,
      });
    }
  }, [employeePopup]);
  if (!employeePopup) return null;
  return (
    <>
      <div
        className=" fixed w-full h-full z-20  flex justify-center items-center bg-black/80"
        onClick={closePopup}
      >
        <form onSubmit={handleSubmit}>
          <fieldset
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          >
            <legend className="fieldset-legend">Employee</legend>

            <label className="label">Profile url</label>
            <input
              type="text"
              name="profileUrl"
              className="input"
              value={formDetails.profileUrl}
              placeholder="profile url"
              onChange={handleInputChane}
            />

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="name"
              value={formDetails.name}
              onChange={handleInputChane}
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email"
              value={formDetails.email}
              onChange={handleInputChane}
            />
            <label className="label">Bio</label>
            <textarea
              className="textarea h-24"
              name="bio"
              placeholder="Bio"
              value={formDetails.bio}
              onChange={handleInputChane}
            ></textarea>
            <button className="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default AddEmployeePopUp;
