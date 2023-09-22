import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const AddTodoHandler = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        isDone: false,
        task: task,
      },
    ]);
    setTask("");
  };
  const DeleteHanlder = (todoItem) => {
    setTodos(todos.filter((data) => todoItem.id !== data.id));
  };
  const IsDoneHandler = (todoItem) => {
    setTodos(
      todos.map((data) => {
        if (data.id === todoItem.id) {
          return {
            ...data,
            isDone: !data.isDone,
          };
        } else {
          return data;
        }
      })
    );
  };
  const EditHandler = (todoItem) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todoItem.id) {
          return {
            ...item,
            task: task,
          };
        } else return item;
      })
    );
  };
  console.log(todos);
  return (
    <div className="w-screen h-screen flex flex-col items-center p-16">
      <div className="w-full flex justify-center gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Enter the todo"
          className="w-8/12 h-16 p-2 rounded-lg shadow-lg border"
        />
        <button
          className="bg-white h-16 w-20 text-black rounded-xl shadow-xl"
          onClick={AddTodoHandler}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col mt-10">
        {todos.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <input
              type="checkbox"
              value={item.isDone}
              onChange={() => IsDoneHandler(item)}
            />
            <h1 onDoubleClick={() => setTask(item.task)}>{item.task}</h1>
            <button
              className="px-4 py-2 bg-white text-black rounded-xl"
              onClick={() => DeleteHanlder(item)}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 bg-white text-black rounded-xl"
              onClick={() => EditHandler(item)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
