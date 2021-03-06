import Draggable from "../../../Components/Draggable/Draggable";
import "./Filters.css";

const Filters = ({ dimentionData, measureData, onDrop, clearFilteredData }) => {
  return (
    <>
      <label>Dimension:</label>
      <div className="border my-2 row mx-0">
        <div className="col-10 px-0">
          <Draggable
            data={dimentionData}
            onDrop={(e) => onDrop(e)}
            className="filter-box d-flex"
          />
        </div>

        {dimentionData?.length > 0 && (
          <div className="col-2 text-end p-0">
            <button
              className="btn btn-outline-secondary"
              onClick={() => clearFilteredData("dimention")}
            >
              clear
            </button>
          </div>
        )}
      </div>
      <label>Measure:</label>
      <div className="border my-2 row mx-0">
        <div className="col-10 px-0">
          <Draggable
            data={measureData}
            onDrop={(e) => onDrop(e)}
            className="filter-box d-flex"
          />
        </div>
        {measureData?.length > 0 && (
          <div className="col-2 text-end p-0">
            <button
              className="btn btn-outline-secondary"
              onClick={() => clearFilteredData("measure")}
            >
              clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
