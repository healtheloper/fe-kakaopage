import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";
import { getJsons } from "./utils.js";
import GenreList from "./screens/Components/GenreList.js";
import Genre from "./screens/Components/Genre.js";
import MainBox from "./screens/Components/MainBox.js";
import App from "./screens/App.js";

const init = async () => {
  const paths = ["categories", "genres"];
  const [{ results: categories }, { results: genres }] = await getJsons(paths);

  const $app = document.querySelector(".app");

  new App({
    $target: $app,
    state: { categories, genres },
  });
};

init();
