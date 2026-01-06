import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

export default function App() {
  const [userTask, setUserTask] = useState("");
  const [taskEditId, setTaskEditId] = useState(null);
  const inputRef = useRef();
  const [allTask, setAllTask] = useState(() => {
    const savedTodo = localStorage.getItem("allTodo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });
  useEffect(() => {
    localStorage.setItem("allTodo", JSON.stringify(allTask));
  }, [allTask]);
  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-[#0c134c] to-[#070721] pt-6 ">
      <div className="w-[60%] m-auto ">
        {/* HEADER CARD */}
        <Header allTask={allTask} />

        {/* INPUT */}
        <Input
          inputRef={inputRef}
          setAllTask={setAllTask}
          allTask={allTask}
          userTask={userTask}
          setUserTask={setUserTask}
          setTaskEditId={setTaskEditId}
          taskEditId={taskEditId}
        />

        {/* TODO LIST */}
        <List
          inputRef={inputRef}
          setAllTask={setAllTask}
          allTask={allTask}
          setUserTask={setUserTask}
          setTaskEditId={setTaskEditId}
          taskEditId={taskEditId}
        />
      </div>
    </div>
  );
}
