import Draggable from "../../../Components/Draggable/Draggable";
import "./Columns.css";

const Columns = ({ colData, onDrop }) => {
  return (
    <div className=" columns__wrapper border my-2">
      <div className="border p-2">Columns</div>
      <div className="p-2">
        <Draggable
          data={colData}
          onDrop={(e) => onDrop(e)}
          className="columns-content"
        />
      </div>
    </div>
  );
};
export default Columns;
