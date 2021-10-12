import { useEffect } from "react";
import { getPlotterColumns } from "../../../network/plotter/api";

const Columns = () => {
  useEffect(() => {
    getPlotterColumnsData();
  }, []);

  const getPlotterColumnsData = () => {
    getPlotterColumns()
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return <></>;
};
export default Columns;
