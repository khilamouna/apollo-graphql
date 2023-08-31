import { editItem, addItem, deleteItem } from "../models/index";
export const addFlower = (flowerToAdd) => {
  try {
    const resp = addItem(flowerToAdd);
    return resp;
  } catch (error) {
    console.log(error, "Error");
    return error;
  }
};
export const editFlower = (flowerToEdit) => {
  try {
    const resp = editItem(flowerToEdit?.id, flowerToEdit);
    return resp;
  } catch (error) {
    console.log(error, "Error");
    return error;
  }
};
export const deletFlower = (id) => {
  try {
    const resp = deleteItem(id);
    return resp;
  } catch (error) {
    console.log(error, "Error");
    return error;
  }
};
