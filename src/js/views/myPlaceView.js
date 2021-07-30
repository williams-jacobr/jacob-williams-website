class myPlacesView {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  render(message = this._welcomeMessage) {
    this._clear();

    const HTML = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", HTML);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
      <p class="my-places">${this._welcomeMessage}<p>
      `;
  }
}

export default new myPlacesView();
