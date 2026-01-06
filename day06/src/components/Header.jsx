import React, { useState } from "react";

const Header = ({ allTask }) => {
  const completedTaskCount = allTask.reduce(
    (count, task) => (task.completed ? count + 1 : count),
    0
  );
  const totalTaskCount = allTask.length;

  return (
    <>
      <div className="bg-[#0B1444]/80 border-4 border-indigo-400/70 rounded-2xl p-5 flex w-full gap-4  items-center">
        <div className="flex-1  ">
          <div className="w-full">
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-white text-5xl font-bold">ToDo App</h1>
              <p className="text-green-300 font-medium text-xl">
                List your task!
              </p>
            </div>

            {/* Progress Bar */}
            <ProgressBar
              totalTaskCount={totalTaskCount}
              completedTaskCount={completedTaskCount}
            />
          </div>
        </div>

        {/* Progress Circle */}
        <ProgressCircle
          completedTaskCount={completedTaskCount}
          totalTaskCount={totalTaskCount}
        />
      </div>
    </>
  );
};
function ProgressBar({ completedTaskCount, totalTaskCount }) {
  const progress = (completedTaskCount / totalTaskCount) * 100;
  return (
    <>
      <div className="w-[90%] h-2 bg-indigo-900 rounded-full mt-3">
        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{ width: `${isNaN(progress)?0:progress}%` }}
        ></div>
      </div>
    </>
  );
}
function ProgressCircle({ completedTaskCount, totalTaskCount }) {
  return (
    <>
      <div className="size-30  rounded-full bg-indigo-400 flex items-center justify-center text-[#f3f3f3] font-semibold text-3xl">
        {completedTaskCount} / {totalTaskCount}
      </div>
    </>
  );
}
export default Header;
