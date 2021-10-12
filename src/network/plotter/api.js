import { axiosInstance } from "../index";

export function getPlotterColumns() {
  return axiosInstance.get("columns");
}
