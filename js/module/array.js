export class _BtnArray {
  constructor(appJs) {
    this.appJs = appJs;
  }

  getBtnArr() {
    let btnList = this.appJs.map((obj) => {
      return ` <input type="button" value="${obj}" id="hot-buttons"/>`;
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

  getBtnValue() {
    let elem = document.querySelectorAll("#hot-buttons");
    elem.forEach((button) => {
      button.addEventListener("click", () => {
        const hot_button = button.value;
      });
    });
  }
}
