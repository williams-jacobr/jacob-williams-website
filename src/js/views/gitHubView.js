import View from "./view.js";
import { GITHUBICON, GEO_LOCATION_ICON, BOOKMARK_ICON } from "./../config.js";

class gitHubView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  addHandlerClickHeader(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const el = e.target.closest(".github__header");
      if (!el) return;

      handler();
    });
  }

  _generateMarkup() {
    // return "coming soon";
    const data = this._data.repos.map((el) => el.name);
    return `
    <div class="github__container">
    <div class="github__header">
      <div>
        <a href="https://github.com/">${GITHUBICON}</a>
        <a href="${this._data.html}">${this._data.user}</a>
      </div>
      <div>
        <img src="${this._data.avatar}" crossorigin/>
        <p class="github__header--name">${this._data.name}</p>
        <p class="github__header--location">${GEO_LOCATION_ICON}${
      this._data.location
    }</p>
      </div>
    </div>
      <div class="github__items">
        ${this._data.repos
          .filter((el) => el.name !== "hello-world")
          .map(
            (el) => `
        <div class="github__item">
          <p>${BOOKMARK_ICON}<a href="${el.html_url}">${el.name}</a></p>
          <p>${el.description ? el.description : ""}</p>
        </div>`
          )
          .join("")}
      </div>
      </div>
      `;
  }
}

export default new gitHubView();
