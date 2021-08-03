import View from "./view.js";

class BlogView extends View {
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    console.log(this._data.blog_1.images);
    return `
    <div class="blog-container">
    <h1>WELCOME TO MY BLOG</h1>
    <div class="blog-posts">
      <div class="blog-post">
        <p>BLOG POST</p>
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

// BUG
// Can't add image to blog         <img src="./img_1.webp" crossorigin>
