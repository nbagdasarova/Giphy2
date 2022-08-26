import { Search } from "./module/search.js";
const giphyKey = "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB";

const submitBtn = document.querySelector("#submit");
const inputText = document.querySelector("#input-text");

submitBtn.addEventListener("click", searchData);

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
    let img = new Search(result);
    img.render();
  });
}
