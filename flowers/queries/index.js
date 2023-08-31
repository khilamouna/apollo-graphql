import { getItem, listItem } from "../models/index";
export const getFlower = (id) => {
  try {
    const resp = getItem(id);
    return resp;
  } catch (error) {
    console.log(error, "Error");
    return error;
  }
};
export const listItem = () => {
  try {
    const resp = listItem();
    return resp;
  } catch (error) {
    console.log(error, "Error");
    return error;
  }
};
