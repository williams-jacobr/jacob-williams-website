import View from "./view.js";
import image from "../../../imgs/blog/blog_1/img_1.webp";

class BlogView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    return `
    <div class="blog-container">
    <h1>Oblasts and Beyond</h1>
    <div class="blog-posts">
      <div class="blog-post">
        <img src="${image}">
        <p>${this._data.blog_1.text.slice(0, 500)}...</p>
      </div>
      <div class="blog-post"><p>BLOG POST</p></div>
      <div class="blog-post"><p>BLOG POST</p></div>
      <div class="blog-post"><p>BLOG POST</p></div>
      <div class="blog-post"><p>BLOG POST</p></div>
    </div>
  </div>
      `;
  }
}

export default new BlogView();
