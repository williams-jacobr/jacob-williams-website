import View from "./view.js";
import coding from "./../../../imgs/about me/coding.png";

class AboutMeView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  constructor() {
    super();
    this._goToBottom();
    this._addHandlerToBottomClick();
  }

  _addHandlerToBottomClick() {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const toBottomBtn = e.target.closest(".find-out-more");
        if (!toBottomBtn) return;

        toBottomBtn.parentElement.style.transition = "0.25s ease-in";
        toBottomBtn.parentElement.style.opacity = "0";
        toBottomBtn.parentElement.style.transform = "translateY(-100%)";

        this._renderPage2();
      }.bind(this)
    );
  }

  _generateMarkup() {
    return `
    <div id="welcome">
        <h1>Jacob Williams</h1>
        <div class="find-out-more">
        <p class="find-out-more__btn">↓</p>
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

  _renderPage2() {
    this._clear();

    const HTML = `
    <div class="about-me">
      <div><img src = ${coding}/>Coder</div>
      <div>Mathematician</div>
      <div>Challenge breaker (Pictures of me at the top of every section showing something exciting)</div>
    </div>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", HTML);
  }
}

export default new AboutMeView();
