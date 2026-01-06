import React from "react";

const List = ({
  setAllTask,
  allTask,
  setUserTask,
  inputRef,
  taskEditId,
  setTaskEditId,
}) => {
  function toggleTask(id) {
    setAllTask(
      allTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function handleDelete(id) {
    setAllTask(allTask.filter((task) => task.id !== id));
    console.log("enter");
  }
  function handleEdit(id) {
    setUserTask(allTask.filter((task) => task.id === id)[0].task);
    inputRef.current.focus();
    setTaskEditId(id);
  }
  return (
    <>
      <div className="">
        {/* Task 1 */}

        {allTask.map((task) => (
          <div
            key={task.id}
            className={`bg-[#0B1444]/80 border-2 mt-3 ${
              taskEditId === task.id
                ? "border-amber-400"
                : "border-indigo-400/40"
            }  rounded-xl px-4 py-3 flex justify-between items-center`}
          >
            <div className="flex items-center  w-70  gap-3  ">
              <input
                disabled={taskEditId === task.id}
                name="completed"
                type="checkbox"
                checked={task.completed}
                className="accent-cyan-400 scale-150 "
                onChange={() => {
                  toggleTask(task.id);
                }}
              />
              <p
                className={` text-cyan-200 text-xl pb-1.5 ${
                  task.completed && "line-through text-cyan-300"
                }  `}
              >
                {task.task}
              </p>
            </div>
            <div className="flex gap-3 text-2xl ">
              <button
                className="text-indigo-300 cursor-pointer"
                onClick={() => {
                  handleEdit(task.id);
                }}
                disabled={taskEditId === task.id}
              >
                ✏️
              </button>
              <button
                className="text-red-400 cursor-pointer"
                onClick={() => {
                  handleDelete(task.id);
                }}
                disabled={taskEditId === task.id}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
        {/* Task 2 */}

        {/* Task 3 */}
      </div>
    </>
  );
};

export default List;
