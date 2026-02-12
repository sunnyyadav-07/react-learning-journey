import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../store/feature/popup/popup.slice";
import { deleteEmployee } from "../store/feature/employees/employee.thunk";

const DeletePopup = () => {
  const deletePopup = useSelector((state) => state.popup.deletePopup);
  const dispatch = useDispatch();
   function handleDeleteEmployee() {
     dispatch(deleteEmployee(deletePopup));
    dispatch(closeDeletePopup())
  }
  if (!deletePopup) return null;
  return (
    <div
      className=" fixed w-full h-full z-20  flex justify-center items-center bg-black/80"
      onClick={() => {
        dispatch(closeDeletePopup());
      }}
    >
      <div
        className="card w-96 bg-base-100 card-md shadow-sm"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="card-body">
          <h2 className="card-title">Delete</h2>
          <p>Are you sure you want to delete this?</p>
          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={handleDeleteEmployee}
            >
              Yes
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(closeDeletePopup());
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
