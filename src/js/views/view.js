export default class View {
  _parentElement = document.querySelector("main");
  _data;

  render(data = "", message = this._welcomeMessage) {
    this._data = data;
    this._clear();

    const HTML = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", HTML);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
