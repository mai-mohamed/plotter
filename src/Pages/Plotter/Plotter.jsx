import { useEffect, useState } from "react";
import Columns from "./Columns/Columns";
import Filters from "./Filters/Filters";
import Chart from "../../Components/Chart/Chart";
import Loader from "../../Components/Loader/Loader";
import { getChart, getPlotterColumns } from "../../network/plotter/api";

const Plotter = () => {
  const [colData, setColData] = useState([]);
  const [dimentionData, setDimentionData] = useState([]);
  const [measureData, setMeasureData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [plotted, setPlotted] = useState([]);

  useEffect(() => {
    getPlotterColumnsData();
  }, []);

  useEffect(() => {
    if (dimentionData.length > 0 && measureData.length > 0) {
      const dimention = dimentionData.map((data) => data.name);
      const measures = measureData.map((data) => data.name);
      const payload = {
        measures,
        dimension: dimention[0],
      };
      getChartData(payload);
    }
  }, [dimentionData, measureData]);

  useEffect(() => {
    if (chartData?.length > 1) {
      let modifiedData = [...chartData];
      modifiedData?.shift();

      const plottedData = modifiedData.map((cell) => {
        return {
          id: cell.name,
          color: "hsl(255, 70%, 50%)",
          data: cell.values.map((y, i) => ({
            x: chartData[0].values[i],
            y,
          })),
        };
      });

      setPlotted(plottedData);
    }
  }, [chartData]);

  const getPlotterColumnsData = () => {
    getPlotterColumns()
      .then(({ data }) => setColData(data))
      .catch((err) => console.log(err));
  };

  const getChartData = (payload) => {
    getChart(payload)
      .then(({ data }) => setChartData(data))
      .catch((err) => console.log(err));
  };

  const onDrop = (evt) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    const checkker = data.split(",");
    if (checkker[1] == "dimension" && dimentionData.length < 1) {
      const newDimentionEle = colData.filter(
        (task) => task.name == checkker[0]
      );
      const newArr = [...dimentionData, ...newDimentionEle];
      const tasksArr = filterColData(newArr);
      setDimentionData(newArr);
      setColData(tasksArr);
    } else if (checkker[1] == "measure") {
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
  const clearFilteredData = (type) => {
    if (type == "dimention") {
      setColData([...colData, ...dimentionData]);
      setDimentionData([]);
    } else {
      setColData([...colData, ...measureData]);
      setMeasureData([]);
    }
    setChartData([]);
    setPlotted([]);
  };
  return (
    <>
      {colData.length > 0 ? (
        <div className="plotter__wrapper">
          <Columns colData={colData} onDrop={onDrop} />
          <Filters
            dimentionData={dimentionData}
            measureData={measureData}
            onDrop={onDrop}
            clearFilteredData={clearFilteredData}
          />
          {plotted?.length > 0 && (
            <div className="chart__wrapper">
              <Chart data={plotted} />
            </div>
          )}
          {chartData?.length < 2 && (
            <p>please choose the data you want to be plotted</p>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Plotter;
