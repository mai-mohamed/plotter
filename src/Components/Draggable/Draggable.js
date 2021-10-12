import {
  onDragStart,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
} from "../../utils/dragDropUtils";

const Draggable = ({ className, onDrop, data }) => {
  return (
    <div
      className={className}
      onDragLeave={(e) => onDragLeave(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, false)}
    >
      {data.map((task) => (
        <div
          className={task.function}
          key={task.name}
          id={task.name}
          draggable
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e) => onDragEnd(e)}
        >
          {task.name}
        </div>
      ))}
    </div>
  );
};
export default Draggable;
