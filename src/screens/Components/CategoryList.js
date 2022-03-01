import Component from "../Component.js";
import { getComponentsTemplate } from "../../serviceUtils.js";
import { createExtendsRelation } from "../../utils.js";

function CategoryList($target, state) {
  Component.call(this, $target, state);
}

createExtendsRelation(CategoryList, Component);

CategoryList.prototype.setEvent = function () {
  this.addEvent("click", ".header__nav-item", ({ target }) => {
    const $eventTarget = target.closest(".header__nav-item");
    const category = $eventTarget.dataset.category;
    const selectedCt = this.state.categories.find(
      (ct) => ct.state.category === category
    );
    this.state.categories.forEach((ct) => {
      ct.setState({ selected: false });
    });
    selectedCt.setState({ selected: true });
    this.setState({ selected: category });
  });
};

CategoryList.prototype.template = function () {
  const { categories } = this.state;
  return categories ? getComponentsTemplate(categories) : "";
};

export default CategoryList;
