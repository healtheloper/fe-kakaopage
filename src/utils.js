import { HEROKU_SERVER_URL, SERVER_FETCH_URL } from "./constants.js";

const createExtendsRelation = (Child, Parent) => {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};

const getJson = async (dataName) => {
  try {
    const response = await fetch(
      `${DEPLOY ? HEROKU_SERVER_URL : SERVER_FETCH_URL}${dataName}`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getJsons = (paths) => {
  return Promise.all(paths.map((path) => getJson(path)));
};

const getUniqueId = () => {
  const START_ASCII_CODE = 97; // a
  const END_ASCII_CODE = 122; // z
  const ASCII_RANGE = END_ASCII_CODE - START_ASCII_CODE;
  return "xxxx".replace(/[x]/g, () => {
    return String.fromCharCode(
      START_ASCII_CODE + parseInt(Math.random() * ASCII_RANGE)
    );
  });
};

export { getJson, createExtendsRelation, getJsons, getUniqueId };
