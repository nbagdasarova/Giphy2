import { _Search } from "./module/search.js";
import { _BtnArray } from "./module/array.js";
import { searchArr } from "./common/common.js";
import { giphyKey } from "./common/common.js";

const submitBtn = document.querySelector("#submit");
const inputText = document.querySelector("#input-text");
const trendBtn = document.querySelector("#trend-btn");

submitBtn.addEventListener("click", searchData);
trendBtn.addEventListener("click", searchTrend);

// fetch with given search value
function searchGif(searchValue) {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchValue}&limit=10&api_key=${giphyKey}&fmt=json`
  ).then((response) => response.json());
}
// fetch results
async function searchData(value) {
  var value = inputText.value;
  let result = await searchGif(value);
  result.data.forEach((data) => {
    console.log(data.images.original.webp);
    let img = new _Search(result);
    img.render();
  });
}

// trenging gyphi
function trendsGif() {
  return fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=10&api_key=${giphyKey}&fmt=json`
  ).then((response) => response.json());
}

async function searchTrend() {
  let result = await trendsGif();
  result.data.forEach((data) => {
    console.log(data.images.original.webp);
    let img = new _Search(result);
    img.render();
  });
}

// searched btn array
let btnSearchList = new _BtnArray(searchArr);
let list = btnSearchList.render();

// const hotBtn = document.getElementById("");
// hotBtn.addEventListener("click", searchBtnData(hotBtn.value));

async function searchBtnData(value) {
  // let activBtn = document.getElementsByClassName("hot-buttons");
  // for (let i = 0; i < activBtn.length; i++) {
  //   let value = activBtn[i].value;
  let result = await searchGif(value);
  result.data.forEach((data) => {
    console.log(data.images.original.webp);
    let img = new _Search(result);
    img.render();
  });
}

let activBtn = document.getElementsByClassName("hot-buttons");
for (let i = 0; i < activBtn.length; i++) {
  let elem = activBtn[i];

  elem.addEventListener("click", () => {
    searchBtnData(elem.value);
  });
}
