import { useEffect, useState } from "react";
import Columns from "./Columns/Columns";
import { getPlotterColumns } from "../../network/plotter/api";
import Filters from "./Filters/Filters";

const Plotter = () => {
  useEffect(() => {
    getPlotterColumnsData();
  }, []);

  const [colData, setColData] = useState([]);
  const [dimentionData, setDimentionData] = useState([]);
  const [measureData, setMeasureData] = useState([]);

  const getPlotterColumnsData = () => {
    getPlotterColumns()
      .then(({ data }) => setColData(data))
      .catch((err) => console.log(err));
  };

  const onDrop = (evt) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    const checkker = data.split(",");
    if (checkker[1] == "dimension") {
      const newDimentionEle = colData.filter(
        (task) => task.name == checkker[0]
      );
      const newArr = [...dimentionData, ...newDimentionEle];
      const tasksArr = filterColData(newArr);
      setDimentionData(newArr);
      setColData(tasksArr);
    } else if (checkker[1] == "measure" && measureData.length < 1) {
      const newMeasureEle = colData.filter((task) => task.name == checkker[0]);
      const newArr = [...measureData, ...newMeasureEle];
      const tasksArr = filterColData(newArr);
      setMeasureData(newArr);
      setColData(tasksArr);
    }
  };

  const filterColData = (newArr) => {
    const colDataArr = colData.filter(
      (ar) =>
        !newArr.find((rm) => rm.name === ar.name && ar.function === rm.function)
    );
    return colDataArr;
  };

  return (
    <div className="plotter__wrapper">
      <Columns colData={colData} onDrop={onDrop} />
      <Filters
        dimentionData={dimentionData}
        measureData={measureData}
        onDrop={onDrop}
      />
    </div>
  );
};

export default Plotter;
