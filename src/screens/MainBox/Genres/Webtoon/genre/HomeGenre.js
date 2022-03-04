import Component from "../../../../Component.js";
import { createExtendsRelation, getJson } from "../../../../../utils.js";
import components from "../../components.js";
import { API_POINT } from "../../../../../constants.js";
import CategoryId from "../../../../../enums/CategoryId.js";
import GenreId from "../../../../../enums/GenreId.js";

function HomeGenre(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(HomeGenre, Component);

HomeGenre.prototype.sortRanking = function (items) {
  return items.sort((i1, i2) => i2.rank - i1.rank);
};

HomeGenre.prototype.filterContent = function (webtoons, where, what) {
  return webtoons.filter((webtoon) =>
    typeof webtoon[where] === "object"
      ? webtoon[where].includes(what)
      : webtoon[where] === what
  );
};

HomeGenre.prototype.mount = function () {
  const { contents } = this.state;

  contents.forEach((content) => {
    const { elementId, className, state } = content;
    const { list } = state;
    const $content = this.$target.querySelector(`#${elementId}`);

    new components[className]({
      $target: $content,
      state: {
        ...state,
        webtoons: className === "mainBanner" ? list : [],
      },
      $props: {
        sortRanking: this.sortRanking,
        filterContent: this.filterContent,
        setCarousel:
          className === "mainBanner" ? this.$props.setCarousel : null,
        clearCarousel:
          className === "mainBanner" ? this.$props.clearCarousel : null,
      },
    });
  });
};

HomeGenre.prototype.setup = async function () {
  const { category, genre } = this.state;

  const {
    section_containers,
    top_banner: { list },
  } = await getJson(
    API_POINT({ categoryId: CategoryId[category], genreId: GenreId[genre] })
  );

  this.state = {
    section_containers,
    contents: [
      {
        elementId: "wtMainBanner",
        className: "mainBanner",
        state: {
          list,
        },
      },
      { elementId: "wtNavDetail", className: "navDetail", state: {} },
      { elementId: "wtSubBanner", className: "subBanner", state: {} },
      {
        elementId: "wtDaysTop",
        className: "daysTop",
        state: {
          title: "요일연재 TOP",
        },
      },
      {
        elementId: "wtNewWorkTop",
        className: "newWorkTop",
        state: {
          title: "기대신작 TOP",
        },
      },
      {
        elementId: "wtRofanGenreTop",
        className: "genreTop",
        state: {
          title: "로판 TOP",
        },
      },
      {
        elementId: "wtDramaGenreTop",
        className: "genreTop",
        state: {
          title: "드라마 TOP",
        },
      },
      {
        elementId: "wtDateTop",
        className: "dateTop",
        state: {
          title: "일간 랭킹 TOP",
        },
      },
      {
        elementId: "wtRecommendEvent",
        className: "recommendEvent",
        state: {
          title: "추천이벤트",
        },
      },
      { elementId: "wtFullButton", className: "fullButton", state: {} },
    ],
  };
};

HomeGenre.prototype.template = function () {
  const { contents } = this.state;
  return contents.reduce((tags, { elementId, className }) => {
    tags += `<li id="${elementId}" class="mainBox main__${className}"></li>`;
    return tags;
  }, "");
};

export default HomeGenre;
