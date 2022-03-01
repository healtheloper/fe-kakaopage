import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";
import { getJsons } from "./utils.js";
import GenreList from "./screens/Components/GenreList.js";
import Genre from "./screens/Components/Genre.js";

const init = async () => {
  const paths = ["categories", "genres"];

  const [{ results: categories }, { results: genres }] = await getJsons(paths);

  const $main = document.querySelector(".main");
  const $headerNav = document.querySelector(".header__nav");

  const categoryList = new CategoryList($headerNav, {
    nodeId: "category-list",
    selected: "webtoon",
  });

  categoryList.setState({
    categories: categories.map(
      (cInfo) => new Category(categoryList.getElement(), { ...cInfo })
    ),
  });

  // const genreList = new GenreList($main, {
  //   nodeId: "genre-list",
  //   genres: genres.map((gInfo) => new Genre($main, { ...gInfo })),
  //   category: categoryList.state.selected,
  //   selected: "home",
  // });
  // const category = categoryList.state.categories.find(
  //   ({ state: { selected } }) => selected
  // ).state.category;

  // genreList.setState({ genres: genres[category], category });
  // categoryList.setState({ genreList });
};

init();
