import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";

function Category(target, state) {
  Component.call(this, target, state);
}
createExtendsRelation(Category, Component);

Category.prototype.template = function () {
  const { name, category, waitForFree, newAlert, selected } = this.state;
  return `
      <li class="header__nav-item 
      ${selected ? "selected" : ""}" data-category="${category}">
        <span>
          ${name}
          ${waitForFree ? ' ・ <i class="fas fa-clock"></i>' : ""}
        </span>
        ${newAlert ? '<span class="yellow-dot"></span>' : ""}
      </li>`;
};

export default Category;
