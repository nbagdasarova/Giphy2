export class _BtnArray {
  constructor(appJs) {
    this.appJs = appJs;
  }

  getBtnArr() {
    let btnList = this.appJs.map((obj) => {
      return ` <input type="button" value="${obj}" class="hot-buttons"/>`;
    });
    return btnList.join("");
  }

  setBtnArr(id, value) {
    let elem = document.getElementById(id);
    elem.innerHTML = value;
  }

  render() {
    this.setBtnArr("buttons", this.getBtnArr());
  }

}
