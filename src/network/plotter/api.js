import { axiosInstance } from "../index";

export const getPlotterColumns = () => {
  return axiosInstance.get("columns");
};

export const getChart = (payload) => {
  return axiosInstance.post("data", payload);
};
