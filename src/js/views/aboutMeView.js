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
          <div class="image-overlay">
            <div>
              <p class="image-overlay--title">Coder</p>
            </div>
            <p class="image-overlay--text">(Pictures of me at the top of every section showing something exciting)</p> 
          </div>
        </div>
        <div>
          <img class="image-even image-matlab" src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" crossorigin/>
          <div class="image-overlay image-overlay--even">
            <div class="image-even--text">
              <p class="image-overlay--title">Mathematician</p>
            </div>
            <p class="image-overlay--text">(Pictures of me at the top of every section showing something exciting)</p> 
          </div>
        </div>
        <div>
          <img src = ${coding}/>
          <div class="image-overlay">
            <div>
              <p class="image-overlay--title"> Challenge breaker  
              </p>
            </div> 
            <p class="image-overlay--text">(Pictures of me at the top of every section showing something exciting)</p> 
          </div>
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

  addScrollDownAnimation() {
    const section = this._parentElement.querySelector(".about-me__welcome");
    console.log(section);

    const sectionObserver = new IntersectionObserver(this._hideSection, {
      root: this._parentElement,
      threshold: 0.35,
    });

    sectionObserver.observe(section);
    // section.classList.remove("disappear-up");
  }

  _hideSection(entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("disappear-up");
      return;
    }
    entry.target.classList.add("disappear-up");

    // if (entry.intersectionRatio > 0.5) {
    //   console.log("INTERSECT");
    //   entry.target.classList.remove("disappear-up");
    //   return;
    // }
    // observer.unobserve(entry.target);
  }
}

export default new AboutMeView();
