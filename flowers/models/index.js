import db from "../../db/db";
export const getItem = (id) => {
  try {
    const flower = db?.flowers?.filter(
      (flower) => flower?.id === parseInt(id)
    )[0];
    return flower;
  } catch (error) {
    console.error(error, "Error");
    return error;
  }
};
export const listItems = () => {
  try {
    return db?.flowers;
  } catch (error) {
    console.log(error, "Errror");
    return error;
  }
};
export const editItem = (id, data) => {
  try {
    const itemIndex = db.flowers.findIndex(
      (flower) => flower.id === parseInt(id)
    );
    if (itemIndex === -1) throw new error("flower not found");
    else {
      data.id = parseInt(data.id);
      db.flowers[itemIndex] = data;
      return db.flowers[itemFlowers];
    }
  } catch (error) {
    console.log(error, "Errror");
    return error;
  }
};
export const addItem = (data) => {
  try {
    const newFlower = { id: db.flowers.length + 1, ...data };
    db.flowers.push(newFlower);
    return newFlower;
  } catch (error) {
    console.log(error, "Errror");
    return error;
  }
};
export const deletItem = (id) => {
  try {
    const itemIndex = db.flowers.findIndex(
      (flower) => flower.id === parseInt(id)
    );
    if (itemIndex === -1) throw new error("flower not found");
    else {
      db.flowers.splice(itemIndex, 1);
      return db.flowers;
    }
  } catch (error) {
    console.log(error, "Errror");
    return error;
  }
};
