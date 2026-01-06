import React, { useState } from "react";

const Input = ({
  setAllTask,
  allTask,
  userTask,
  setUserTask,
  inputRef,
  setTaskEditId,
  taskEditId,
}) => {
  const [error, setError] = useState(false);
  function handleAdd() {
    if (userTask.trim() === "") {
      setUserTask("");
      setError(true);
      return;
    }
    if (taskEditId) {
      setAllTask((prev) =>
        prev.map((task) =>
          task.id === taskEditId ? { ...task, task: userTask } : task
        )
      );
      setTaskEditId(null);
    } else {
      setAllTask([
        ...allTask,
        { id: Date.now(), task: userTask.trim(), completed: false },
      ]);
    }

    setUserTask("");
  }
  return (
    <>
      <div className="flex items-center gap-3 mt-5">
        <input
          name="task"
          ref={inputRef}
          placeholder="Write your task..."
          value={userTask}
          onChange={(e) => {
            setError(false);
            setUserTask(e.target.value);
          }}
          className="flex-1 bg-[#0B1444]/80 border-3 text-xl border-indigo-400/50 text-white px-4 py-3 rounded-xl outline-none placeholder-indigo-300  "
        />

        <div className="flex gap-1.5">
          {taskEditId && (
            <button
              onClick={() => {
                setUserTask("");
                setTaskEditId(null);
              }}
              className="  rounded-lg  text-white font-medium text-2xl flex justify-center items-center bg-red-500 hover:bg-red-600  py-2.5 px-4 "
            >
              cancel
            </button>
          )}
          <button
            onClick={handleAdd}
            className={` py-2.5 px-4 rounded-lg ${
              taskEditId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-indigo-500 hover:bg-indigo-600"
            }  text-white font-medium text-2xl flex justify-center items-center `}
          >
            {taskEditId ? "edit" : "add"}
          </button>
        </div>
      </div>
      <div className="mt-0">
        {error && <p className="text-red-500 pl-2">can't be empty!</p>}
      </div>
    </>
  );
};

export default Input;
