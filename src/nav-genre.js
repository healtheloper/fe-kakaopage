import { renderGenreContents } from "./core.js";
import { updateSelectedNode } from "./utils.js";
import genres from "../genres.js";

const headerNav = document.querySelector(".header__nav");
const genreNav = document.querySelector(".main__navGenre");

const handleNavGenre = (event) => {
  const category = [...headerNav.children].find((categoryNode) =>
    [...categoryNode.classList].some((cl) => cl === "selected")
  ).dataset.category;

  updateSelectedNode(genreNav, event.target);

  const genreName = event.target.dataset.genre;
  const genreContents = genres[category][genreName].screen();
  renderGenreContents(genreContents);
};

export { handleNavGenre };
