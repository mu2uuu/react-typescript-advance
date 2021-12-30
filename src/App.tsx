import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("")
      .then((res) => {
        setTodos(res.data);
      })
      .catch(() => {
        console.log("err");
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        <Todo userId={todo.title} title={todo.userId} />;
      })}
    </div>
  );
}
