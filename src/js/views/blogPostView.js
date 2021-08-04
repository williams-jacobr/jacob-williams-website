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

  _generateMarkup() {
    return `
    <div class="blog-post-text__container">
    <p class="blog-post-text">${this._data.text}</p>
    </div>
      `;
  }
}

export default new BlogPostView();
