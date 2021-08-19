import View from "./view.js";
import coding from "./../../../imgs/about me/coding.png";
import { Handler } from "leaflet";

class AboutMeView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  constructor() {
    super();
    this._goToBottom();
  }

  addHandlerToBottomClick(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const toBottomBtn = e.target.closest(".find-out-more");
        if (!toBottomBtn) return;

        const scrollTarget =
          this._parentElement.querySelector(".about-me__more");
        handler(scrollTarget);
      }.bind(this)
    );
  }

  scroll(pos) {
    const el = this._parentElement.querySelector(".about-me");
    el.scrollTop = pos;
  }

  _generateMarkup() {
    return `
    <div class="about-me">
      <div class="about-me__welcome">
        <h1>Jacob Williams</h1>
        <div class="find-out-more">
          <p class="find-out-more__btn">↓</p>
        </div>
      </div>
      <div class="about-me__more">  
        <div>
          <img src = ${coding}/>
          <p>Coder</p>
        </div>
        <div>
          <p>Mathematician</p>
        </div>
        <div>
          <p>Challenge breaker (Pictures of me at the top of every section showing something exciting) </p>
        </div>
      </div>
    </div>
      `;
  }

  _goToBottom() {
    this._parentElement.addEventListener("animationend", function (e) {
      if (e.animationName !== "point-down") return;
      e.target.parentElement.insertAdjacentHTML(
        "afterbegin",
        `
      <p class="find-out-more__text">Find out more</p>`
      );
    });
  }
}

export default new AboutMeView();
