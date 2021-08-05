import View from "./view.js";

class BlogPostView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const text = e.target.closest(".blog-post p");
      if (!text) return;
      handler();
    });
  }

  addHandlerCloseClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const closeButton = e.target.closest(".blog-post-text__container--close");
      if (!closeButton) return;
      handler();
    });
  }

  _generateMarkup() {
    console.log(this._data.text);
    return `
    <div class="blog-post-text__container">
    <div class="blog-post-text__container--close">&times</div
    <h1> Oblasts and Beyond </h1>
    <p>${this._data.text.join("</p><p>")}</p>
    </div>
      `;
  }
}

export default new BlogPostView();
