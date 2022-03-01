import Component from "./Component.js";
import Header from "./Components/Header.js";
import MainBox from "./Components/MainBox.js";
import Footer from "./Components/Footer.js";
import { createExtendsRelation } from "../utils.js";

function App($target, state) {
  Component.call(this, $target, state);
}

createExtendsRelation(App, Component);

App.prototype.mount = function () {
  const $header = this.$target.querySelector(".header");
  const $main = this.$target.querySelector(".main");
  const $footer = this.$target.querySelector("footer");

  const { categories, genres } = this.state;

  new Header({
    $target: $header,
    state: {
      selected: "webtoon",
      categories,
    },
  });

  new MainBox({
    $target: $main,
    state: {
      category: "webtoon",
      genres: genres.webtoon,
      selected: "home",
    },
  });

  new Footer({
    $target: $footer,
  });
};

App.prototype.template = function () {
  return `
    <header class="header"></header>
    <div class="main"></div>
    <footer></footer>
    `;
};

export default App;
