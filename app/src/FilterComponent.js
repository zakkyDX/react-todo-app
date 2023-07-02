import "./FilterComponent.css";

export default function FilterComponent(props) {
  const all = () => {
    props.setFilterStatus(0);
  };
  const done = () => {
    props.setFilterStatus(1);
  };
  const unDone = () => {
    props.setFilterStatus(2);
  };
  return (
    <div className="filters">
      <button onClick={all}>すべて</button>
      <button onClick={done}>完了</button>
      <button onClick={unDone}>未完了</button>
    </div>
  );
}
