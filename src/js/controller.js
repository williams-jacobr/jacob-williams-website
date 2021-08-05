import * as model from "./model.js";
import myPlacesView from "./views/myPlaceView.js";
import blogView from "./views/blogView.js";
import blogPostView from "./views/blogPostView.js";
import aboutMeView from "./views/aboutMeView.js";
import gitHubView from "./views/gitHubView.js";
import cvView from "./views/cvView.js";

const myPlacesButton = document.querySelector(`[href="#myplaces"]`);
const blogButton = document.querySelector(`[href="#blog"]`);
const aboutMeButton = document.querySelector(`[href="#aboutme"]`);
const gitHubButton = document.querySelector(`[href="#github"]`);
const cvButton = document.querySelector(`[href="#cv"]`);

const controlPlacesView = function () {
  myPlacesView.render();
};

const controlBlogView = function () {
  blogView.render(model.state.blogs);
};

const controlBlogPostView = function () {
  // ADD - Need a way to collect and then pass in which blog it is! - Use data attribute
  blogPostView.render(model.state.blogs.blog_1);
};

const controlAboutMeView = function () {
  aboutMeView.render();
};

const controlGitHubView = function () {
  gitHubView.render();
};

const controlCvView = function () {
  cvView.render();
};

const init = function () {
  myPlacesButton.addEventListener("click", controlPlacesView);
  blogButton.addEventListener("click", controlBlogView);
  blogPostView.addHandlerClick(controlBlogPostView);
  blogPostView.addHandlerCloseClick(controlBlogView);
  aboutMeButton.addEventListener("click", controlAboutMeView);
  gitHubButton.addEventListener("click", controlGitHubView);
  cvButton.addEventListener("click", controlCvView);
};

init();
aboutMeView.render();
