import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";
import CategoryList from "./CategoryList.js";

function Header($target, state) {
  Component.call(this, $target, state);
}

createExtendsRelation(Header, Component);

Header.prototype.mount = function () {
  const $headerNav = this.$target.querySelector(".header__nav");
  new CategoryList({
    $target: $headerNav,
    state: {
      selected: this.state.selected,
      categories: this.state.categories,
    },
    $props: {
      updateCategory: this.updateCategory.bind(this),
    },
  });
};

Header.prototype.template = function () {
  return `
    <div class="header__title">
        <div class="header__titleLogo">
            <h2 class="logo">parkaopage</h2>
        </div>
        <div class="header__titleSearch">
            <input type="text" />
            <i class="fas fa-search"></i>
        </div>
        <div class="header__titleMenus">
            <div class="titleMenus stage">
            <span class="stage-span">STAGE</span>
            <span class="stage-arrow"></span>
            <span class="stage-popup">새로운 작가를 만나는곳</span>
            </div>
            <span class="titleMenus menu">캐시충전</span>
            <span class="span-bar">|</span>
            <span class="titleMenus menu">로그인</span>
        </div>
    </div>
    <ul class="header__nav"></ul>
  `;
};

Header.prototype.updateCategory = function (category) {
  this.setState({ selected: category });
};

export default Header;
