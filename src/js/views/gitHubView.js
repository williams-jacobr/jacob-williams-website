import View from "./view.js";

class gitHubView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    return `
      <p class="my-places">${this._welcomeMessage}<p>
      `;
  }
}

export default new gitHubView();
