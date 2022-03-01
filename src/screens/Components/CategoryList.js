import Component from "../Component.js";
import { updateNodeClasses } from "../../serviceUtils.js";
import { createExtendsRelation, getJson } from "../../utils.js";

function CategoryList($target, state) {
  Component.call(this, $target, state);
}

createExtendsRelation(CategoryList, Component);

CategoryList.prototype.setEvent = function () {
  this.addEvent("click", ".header__nav-item", ({ target }) => {
    const { updateCategory } = this.$props;
    const $eventTarget = target.closest(".header__nav-item");
    updateCategory($eventTarget.dataset.category);
  });
};

CategoryList.prototype.template = function () {
  const { categories, selected } = this.state;
  return categories
    ?.map((cInfo) => {
      const { name, category, waitForFree, newAlert } = cInfo;
      return `
        <li class="header__nav-item 
        ${selected === category ? "selected" : ""}" data-category="${category}">
          <span>
            ${name}
            ${waitForFree ? ' ・ <i class="fas fa-clock"></i>' : ""}
          </span>
          ${newAlert ? '<span class="yellow-dot"></span>' : ""}
        </li>`;
    })
    .join("");
};

export default CategoryList;
