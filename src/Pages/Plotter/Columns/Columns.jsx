import Draggable from "../../../Components/Draggable/Draggable";

const Columns = ({ colData, onDrop }) => {
  return (
    <>
      <Draggable data={colData} onDrop={(e) => onDrop(e)} />
    </>
  );
};
export default Columns;
