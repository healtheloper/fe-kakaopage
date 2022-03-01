import { createExtendsRelation } from "../../utils.js";
import { updateNodeClasses } from "../../serviceUtils.js";
import Component from "../Component.js";
import Genre from "./Genre.js";
import categories from "../../categories.js";

function GenreList($target, state) {
  Component.call(this, $target, state);
}
createExtendsRelation(GenreList, Component);

GenreList.prototype.render = function () {
  const { category, selected } = this.state;
  this.target.innerHTML = this.template();
  const contentsBox = document.querySelector(".main__contentsBox");
  new categories[category][selected](contentsBox);
  this.removeEvent();
  this.setEvent();
};

GenreList.prototype.setEvent = function () {
  this.addEvent("click", ".navGenre-item", ({ target }) => {
    const eventTarget = target.closest(".navGenre-item");
    updateNodeClasses(eventTarget, "selected");
    this.setState({ genre: eventTarget.dataset.genre });
  });
};

GenreList.prototype.template = function () {
  const { genres, selected } = this.state;
  return `
    <ul class="${genres.length ? "mainBox mainNav" : ""} main__navGenre">
      ${genres.reduce((tags, gInfo) => {
        tags += `
          <li class="navGenre-item ${gInfo.genre === genre ? "selected" : ""}" 
          data-genre="${gInfo.genre}">
              ${gInfo.name}
          </li>`;
        return tags;
      }, "")}
    </ul>
    <ul class="main__contentsBox"></ul>
  `;
};

export default GenreList;
