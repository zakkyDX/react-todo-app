import styles from "./ListComponent.css";

// props.todoItems とするとデータの受け渡しができます。ただし読み取り専用です。
export default function ListComponent(props) {
  return (
    <div className="todo-items">
      <ul>
        <li>
          <span className="col-title-h">タイトル</span>
          <span className="col-status-h">ステータス</span>
          <span className="col-remove-h" />
        </li>
        {/* mapを使用して繰り返し表示 */}
        {props.todoItems.map((todoItem) => {
          if (props.filterStatus === 1 && !todoItem.is_done) {
            return false;
          }
          if (props.filterStatus === 2 && todoItem.is_done) {
            return false;
          }
          return (
            <li key={todoItem.id}>
              <span className="col-title">{todoItem.title}</span>
              <span className="col-status">
                <input
                  type="checkbox"
                  checked={todoItem.is_done}
                  onChange={(e) => {
                    props.updateStatusTodoItem(todoItem.id);
                  }}
                />
              </span>
              <span className="col-remove-h">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    props.removeTodoItem(todoItem.id);
                  }}
                >
                  削除
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
