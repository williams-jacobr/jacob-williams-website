import View from "./view.js";
import { CHEVRON_UP_ICON } from "../config.js";

class MyPlacesMenuView extends View {
  _parentElement;
  _welcomeMessage = "Coming Soon!!";

  renderMenu(data) {
    this._parentElement = document.querySelector(".sidebar");
    this.render(data);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const el = e.target.closest(".my-places__menu--item");
      if (!el) return;

      handler(el);
    });
  }

  addHandlerClickExtend(handler) {
    this._parentElement.addEventListener(
      "click",
      function () {
        handler(this._parentElement);
      }.bind(this)
    );
  }

  _generateMarkup() {
    return `
    <div class = "my-places__menu--container">
    <div class = "my-places__menu--extend">${CHEVRON_UP_ICON}</div>
    ${this._data
      .map(
        (place) => `
      <div class ="my-places__menu--item" data-id="${place.id}">
        <p>${place.description}</p>
      </div>
    `
      )
      .join("")}
    </div>
    `;
  }
}

export default new MyPlacesMenuView();
