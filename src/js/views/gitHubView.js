import View from "./view.js";
import { GITHUBICON } from "./../config.js";

class gitHubView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    // return "coming soon";
    console.log(this._data);
    const data = this._data.repos.map((el) => el.name);
    console.log(data);
    return `
    <div class="github__container">
    <div class="github__header">
    <div>
        ${GITHUBICON}
        </div>
        <div>
        <img src="${this._data.avatar}" crossorigin/>
        ${this._data.user}
        </div>
      </div>
      <div class="github__items">
        ${this._data.repos
          .map(
            (el) => `
        <div class="github__item">
          <a href="${el.html_url}">${el.name}</a>
        </div>`
          )
          .join("")}
      </div>
      </div>
      `;
  }
}

export default new gitHubView();
