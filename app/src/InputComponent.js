import "./InputComponent.css";
import { useState } from "react";

export default function InputComponent(props) {
  const [title, setTitle] = useState("");

  // テキストのonChange用の処理
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  // 保存ボタンのonClick用のメソッド
  const save = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(props.addTodoItem);
    props.addTodoItem(title);
    setTitle("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={changeTitle}
      />
      <button onClick={save}>保存</button>
    </form>
  );
}
