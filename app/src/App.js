import React, { useEffect, useState } from "react";
import "./App.css";

import InputComponent from "./InputComponent";
import FilterComponent from "./FilterComponent";
import ListComponent from "./ListComponent";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  // フィルタ用のステート
  // 0：すべて　1：完了　2：未完了
  const [filterStatus, setFilterStatus] = useState(0);

  // 更新用のメソッドを作っておきコンポーネントに渡す
  const addTodoItem = (title) => {
    setTodoItems([
      ...todoItems,
      { id: todoItems.length + 1, title: title, is_done: false },
    ]);
  };

  // ステータス(チェック)更新メソッド
  const updateStatusTodoItem = (id) => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.is_done = !todoItem.is_done;
        }
        return todoItem;
      })
    );
  };

  // Todo削除用のメソッド
  const removeTodoItem = (id) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div className="wrapper">
      <InputComponent addTodoItem={addTodoItem} />
      <FilterComponent setFilterStatus={setFilterStatus} />
      <ListComponent
        todoItems={todoItems}
        updateStatusTodoItem={updateStatusTodoItem}
        removeTodoItem={removeTodoItem}
        filterStatus={filterStatus}
      />
    </div>
  );
}
