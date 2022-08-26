import {Search} from './module/search.js'
const giphyKey='aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB';
function searchGif(searchValue) {
   return fetch (`https://api.giphy.com/v1/gifs/search?q=${searchValue}&limit=10&api_key=${giphyKey}&fmt=json`)
.then(response=>response.json())
}

const value='smile';
console.log (searchGif(value));

async function searchData (value) {
    let result = await searchGif(value);
    result.data.forEach(data => {
        console.log (data.images.original.webp);
        let img= new Search(result);
        img.render();
        });
}
 console.log ('test',searchData(value));
