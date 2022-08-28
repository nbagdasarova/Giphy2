export class _Search {
  constructor(appJs) {
    // super();
    this.appJs = appJs;
  }

  getSearchImg() {
    let imgList = this.appJs.data.map((obj) => {
      return `<div class="giphy-item">
        <div class="giphy-img" style="background-image:url('${obj.images.original.webp}');">
            <div class="giphy-raiting">
                <p>Raiting : g</p>
            </div>
        </div>
    </div>`;
    });
    return imgList.join("");
  }

  setSearchImg(id, value) {
    let elem = document.getElementById(id);
    elem.innerHTML = value;
  }

  render() {
    this.setSearchImg("searchResult", this.getSearchImg());
  }
}
