import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

export default function App() {
  const [allTask, setAllTask] = useState(() => {
    const savedTodo = localStorage.getItem("allTodo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });
  useEffect(() => {
    localStorage.setItem("allTodo", JSON.stringify(allTask));
  }, [allTask]);
  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-[#0c134c] to-[#070721] pt-6 ">
      <div className="w-[50%] m-auto space-y-5">
        {/* HEADER CARD */}
        <Header allTask={allTask} />

        {/* INPUT */}
        <Input setAllTask={setAllTask} allTask={allTask} />

        {/* TODO LIST */}
        <List setAllTask={setAllTask} allTask={allTask} />
      </div>
    </div>
  );
}
