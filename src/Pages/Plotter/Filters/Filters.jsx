import Draggable from "../../../Components/Draggable/Draggable";

const Filters = ({ dimentionData, measureData, onDrop }) => {
  return (
    <>
      <Draggable
        data={dimentionData}
        onDrop={(e) => onDrop(e)}
        className="mai"
      />
      <Draggable data={measureData} onDrop={(e) => onDrop(e)} className="mai" />
    </>
  );
};

export default Filters;
