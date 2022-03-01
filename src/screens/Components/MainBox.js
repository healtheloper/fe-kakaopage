import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";
import GenreList from "./GenreList.js";

function MainBox($target, state) {
  Component.call(this, $target, state);
}

createExtendsRelation(MainBox, Component);

MainBox.prototype.mount = function () {
  const $navGenre = this.$target.querySelector(".main__navGenre");
  const $contentsBox = this.$target.querySelector(".main__contentsBox");
  const { genres, selected, category } = this.state;
  if (category !== "home") {
    new GenreList({
      $target: $navGenre,
      state: {
        genres,
        selected,
      },
      $props: {
        updateGenre: this.updateGenre.bind(this),
      },
    });
  }

  //   new ContentsBox({
  //     $target: $contentsBox,
  //   });
};

MainBox.prototype.template = function () {
  const { category } = this.state;
  return `
    ${
      category !== "home"
        ? '<ul class="mainBox mainNav main__navGenre"></ul>'
        : ""
    }
    <ul class="main__contentsBox"></ul>
    `;
};

MainBox.prototype.updateGenre = function (genre) {
  this.setState({ selected: genre });
};

export default MainBox;
