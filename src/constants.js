const category_enum = {
  10: 'webtoon',
  11: 'webnovel',
  21: 'movie',
  22: 'broadcast',
  16: 'book',
};

const genre_enum = {
  10000: 'home',
  1002: 'days',
  1000: 'webtoon',
  115: 'boy',
  116: 'drama',
  121: 'romance',
  69: 'rofan',
  112: 'action',
  119: 'bl',
};

const SERVER_FETCH_URL = 'http://127.0.0.1:3000/';
const FRONT_SERVER_URL = '/fe-kakaopage/data/';
const KAKAO_DATA_URL = 'https://dn-img-page.kakao.com/download/resource?kid=';
const API_POINT = ({ categoryId, genreId }) =>
  `${category_enum[categoryId]}${genreId ? `/${genre_enum[genreId]}` : ''}`;

export { FRONT_SERVER_URL, SERVER_FETCH_URL, KAKAO_DATA_URL, API_POINT };
