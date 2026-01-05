import React from "react";

const List = ({ setAllTask, allTask }) => {
  function toggleTask(id) {
    setAllTask(
      allTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <>
      <div className="space-y-3">
        {/* Task 1 */}

        {allTask.map((task) => (
          <div
            key={task.id}
            className="bg-[#0B1444]/80 border-2 border-indigo-400/40 rounded-xl px-4 py-3 flex justify-between items-center"
          >
            <div className="flex items-center  w-70  gap-3  ">
              <input
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
                } `}
              >
                {task.task}
              </p>
            </div>
            <div className="flex gap-3 text-2xl ">
              <button className="text-indigo-300 cursor-pointer">✏️</button>
              <button className="text-red-400 cursor-pointer">🗑️</button>
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
