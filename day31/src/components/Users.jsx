import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/features/user/userSlice";

const Users = () => {
  const user = useSelector((state) => state.user.users);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
