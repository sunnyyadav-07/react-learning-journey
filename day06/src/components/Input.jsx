import React, { useState } from "react";

const Input = ({ setAllTask, allTask }) => {
  const [userTask, setUserTask] = useState("");

  function handleAdd() {
    if (userTask.trim() === "") return;
    setAllTask([
      ...allTask,
      { id: Date.now(), task: userTask.trim(), completed: false },
    ]);

    setUserTask("");
  }
  return (
    <>
      <div className="flex items-center gap-3">
        <input
          name="task"
          placeholder="Write your task..."
          value={userTask}
          onChange={(e) => {
            setUserTask(e.target.value);
          }}
          className="flex-1 bg-[#0B1444]/80 border-3 text-xl border-indigo-400/50 text-white px-4 py-3 rounded-xl outline-none placeholder-indigo-300"
        />
        <button
          onClick={handleAdd}
          className="size-14  rounded-full bg-indigo-500 text-white font-extrabold text-2xl flex justify-center items-center hover:bg-indigo-600"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Input;
