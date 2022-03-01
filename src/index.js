import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";
import { getJsons } from "./utils.js";
import GenreList from "./screens/Components/GenreList.js";

const init = async () => {
  const paths = ["categories", "genres"];

  const [{ results: categories }, { results: genres }] = await getJsons(paths);

  localStorage.setItem("genres", JSON.stringify(genres));

  const $main = document.querySelector(".main");
  const $headerNav = document.querySelector(".header__nav");

  const categoryList = new CategoryList($headerNav, {
    categories: categories.map(
      (cInfo) => new Category($headerNav, { ...cInfo })
    ),
    selected: "webtoon",
  });
  console.log(categoryList);
  // const genreList = new GenreList($main, { genre: "home" });
  // const category = categoryList.state.categories.find(
  //   ({ state: { selected } }) => selected
  // ).state.category;

  // genreList.setState({ genres: genres[category], category });
  // categoryList.setState({ genreList });
};

init();
