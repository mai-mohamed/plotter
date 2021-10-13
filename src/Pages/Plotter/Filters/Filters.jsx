import Draggable from "../../../Components/Draggable/Draggable";

const Filters = ({ dimentionData, measureData, onDrop, clearFilteredData }) => {
  return (
    <>
      <div>
        <Draggable
          data={dimentionData}
          onDrop={(e) => onDrop(e)}
          className="mai"
        />
        <button onClick={() => clearFilteredData("dimention")}>clear</button>
      </div>
      <div>
        <Draggable
          data={measureData}
          onDrop={(e) => onDrop(e)}
          className="mai"
        />
        <button onClick={() => clearFilteredData("measure")}>clear</button>
      </div>
    </>
  );
};

export default Filters;
