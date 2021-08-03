import View from "./view.js";

class cvView extends View {
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    return `
      <p class="my-places">${this._welcomeMessage}<p>
      `;
  }
}

export default new cvView();